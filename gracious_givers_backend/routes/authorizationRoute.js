/**
 * Author: Venkata Saikiran Kattekola (B00857007)
 */
//import express
const express = require("express");
const authorizationRoute = express.Router();

const {
  register,
  loginNgo,
  loginAdmin,
  forgotPassword,
  resetPassword,
} = require("../controllers/authorizationController");

authorizationRoute.post("/register", register);
authorizationRoute.post("/login/ngo", loginNgo);
authorizationRoute.post("/login/admin", loginAdmin);
authorizationRoute.post("/forgotPwd", forgotPassword);
authorizationRoute.post("/recoverPwd", resetPassword);



module.exports = authorizationRoute;
