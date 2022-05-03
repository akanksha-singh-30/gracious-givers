/**
 * Author: Venkata Saikiran Kattekola (B00857007)
 */
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AdminUser = require("../models/AdminUser");
const nodeMailer = require("nodemailer");
exports.register = async (request, response) => {
  const { user_id, password, ngo_name, target_group, email, description } =
    request.body;

  //encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    user_id,
    password: hashedPassword,
    email,
    ngo_name,
    target_group,
    description,
    status: "Pending Admin Approval",
  });

  try {
    await newUser.save();
    const successResponse = {
      message: "User registered successfully",
      success: true,
    };
    response.status(201).json(successResponse);
  } catch (err) {
    const errorResponse = {
      message: err,
      success: false,
    };
    response.status(500).json(errorResponse);
  }
};

exports.loginNgo = async (request, response) => {
  const { password, email } = request.body;
  try {
    //get the user by email
    const user = await User.findOne({ email });
    if (!user) {
      const errorResponse = {
        message: "User not found",
        success: false,
      };
      return response.status(400).json(errorResponse);
    }
    // compare user status
    if (user.status == "Deactivated") {
      const errorResponse = {
        message: "Your account has been deactivated by admin",
        success: false,
      };
      return response.status(400).json(errorResponse);
    } else if (user.status == "Pending Admin Approval") {
      const errorResponse = {
        message:
          "Your account is yet to be approved by admin, please try again later",
        success: false,
      };
      return response.status(400).json(errorResponse);
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const errorResponse = {
        message: "Invalid password",
        success: false,
      };
      return response.status(401).json(errorResponse);
    }

    return response.status(200).json({
      message: "User logged in successfully",
      success: true,
      isNgo: true,
      user,
    });

    console.log(user);
  } catch (err) {
    const errorResponse = {
      message: err,
      success: false,
    };
    response.status(500).json(errorResponse);
  }
};

exports.loginAdmin = async (request, response) => {
  const { password, username, security_a1, security_a2 } = request.body;
  try {
    //get the user by username
    const user = await AdminUser.findOne({ username });
    console.log(user);
    if (!user) {
      const errorResponse = {
        message: "User not found",
        success: false,
      };
      return response.status(404).json(errorResponse);
    }
    //compare password
    //const isMatch = password == user.password;
    if (!(password == user.password)) {
      const errorResponse = {
        message: "Invalid password",
        success: false,
      };
      return response.status(401).json(errorResponse);
    }
    //compare security answers
    if (security_a1 !== user.security_a1 && security_a2 !== user.security_a2) {
      console.log(security_a1);
      console.log(user.security_a1);
      console.log(security_a2);
      console.log(user.security_a2);
      const errorResponse = {
        message: "Invalid security answers",
        success: false,
      };
      return response.status(401).json(errorResponse);
    }

    return response.status(200).json({
      message: "User logged in successfully",
      success: true,
      isAdmin: true, //isAdmin is a flag to indicate if the user is an admin
      user, //delete password from the response
    });
  } catch (err) {
    const errorResponse = {
      message: err,
      success: false,
    };
    response.status(500).json(errorResponse);
  }
};

exports.forgotPassword = async (request, response) => {
  const { email } = request.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const errorResponse = {
        message: "User not found",
        success: false,
      };
      return response.status(404).json(errorResponse);
    }
    const mailTransport = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "graciousgiversweb@gmail.com",
        pass: "GraciousDon123",
      },
    });
    const mailParams = {
      from: "graciousgiversweb@gmail.com",
      to: email,
      subject: "Password Reset",
      text: "Click on the link to reset your password",
      html: `<a href="http://localhost:3000/RecoverPassword/${user.email}">Please click on this to Reset the Password</a>`,
    };
    mailTransport.sendMail(mailParams, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent !!: " + info.response);
      }
    });
    const successResponse = {
      message: "Email sent !!",
      success: true,
    };
    response.status(200).json(successResponse);
  } catch (err) {
    const errorResponse = {
      message: err,
      success: false,
    };
    response.status(500).json(errorResponse);
  }
};

exports.resetPassword = async (request, response) => {
  const { password, email } = request.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const errorResponse = {
        message: "User not found",
        success: false,
      };
      return response.status(404).json(errorResponse);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    await user.save();
    const successResponse = {
      message: "Password reset successfully",
      success: true,
    };
    response.status(200).json(successResponse);
  } catch (err) {
    const errorResponse = {
      message: err,
      success: false,
    };
    response.status(500).json(errorResponse);
  }
};
