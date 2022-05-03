/*
    Author: Jay Nimeshkumar Patel (B00885078)
*/
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AdminUser = require("../models/AdminUser");

const serverErrorResponse = {
    message: "Internal error occured at the server",
    success: false,
}

exports.getPendingNGOs = async (request, response, next) => {
    let condition = {
        status: "Pending Admin Approval",
    };
    User.find(condition)
        .then((ngo) => {
            if (!ngo) {
                const errorResponse = {
                    message: "Pending Admin Approval",
                    success: false,
                };
                response.status(404).send(errorResponse);
            } else {
                response.status(200).send(ngo);
            }
        })
        .catch((error) => {
            console.log("Error while retrieving pending NGOs");
            console.log(error);
            const errorResponse = {
                message: "Internal error occured at the server",
                success: false,
            };
            response.status(500).send(errorResponse);
        });
};

exports.getActiveNGOs = async (request, response, next) => {
    let condition = {
        status: "Active",
    };
    User.find(condition)
        .then((ngo) => {
            if (!ngo) {
                const errorResponse = {
                    message: "Active",
                    success: false,
                };
                response.status(404).send(errorResponse);
            } else {
                response.status(200).send(ngo);
            }
        })
        .catch((error) => {
            console.log("Error while retrieving active NGOs");
            console.log(error);
            const errorResponse = {
                message: "Internal error occured at the server",
                success: false,
            };
            response.status(500).send(errorResponse);
        });
};

exports.getNgo = async (request, response, next) => {
    const ngoId = request.params.id;
    User.findById(ngoId)
        .then((ngo) => {
            if (!ngo) {
                const errorResponse = {
                    message: "Ngo with id: " + id + " not found",
                    success: false,
                };
                response.status(404).send(errorResponse);
            } else {
                response.status(200).send(ngo);
            }
        })
        .catch((error) => {
            console.log("Error while retrieving ngo with ID :" + ngoId);
            const errorResponse = {
                message: "Internal error occured at the server",
                success: false,
            };
            response.status(500).send(errorResponse);
        });
};

exports.updateStatus = async (request, response, next) => {
    const ngoId = request.params.id;
    const newStatusValue = request.params.status;
    const invalidStatusChange = {
        message: "Cannot update the NGO with status " + newStatusValue,
        success: false,
    }

    if ("Active" === newStatusValue || 
        "Deactivated" === newStatusValue) {
        User.findById(ngoId)
        .then(ngo => {
            console.log(ngo);
            if (!ngo) {
                const errorResponse = {
                    message: "Ngo with id " + ngoId + " not found",
                    success: false,
                }
                response.status(404).send(errorResponse);
            }
            else {
                const updatedNgo = new User({
                    status: newStatusValue,
                })
                console.log(User);
                User.findByIdAndUpdate(
                    { _id: ngoId }, {status: newStatusValue}, (error, ngo) => {
                        if (error) {
                            console.log(error);
                            response.status(500).send(serverErrorResponse);
                        } 
                        else 
                        {                            
                            const successResponse = {
                                message: "Ngo status updated successfully",
                                success: true
                            }
                            response.status(200).send(successResponse);                            
                        }
                    }
                )   
            };
        })
        .catch(error => {
            console.log(error);
            console.log("Error while retrieving ngo with ID :" + ngoId);
            response.status(500).send(serverErrorResponse);
        });  
    }
    else 
    {
        response.status(400).send(invalidStatusChange);
    }
    
}
