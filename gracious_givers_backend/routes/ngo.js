/*
    Author: Jay Nimeshkumar Patel (B00885078)
*/
const express = require("express");
const ngo = express.Router();
const ngoController = require('../controllers/NGO');

// Get all pending ngo details
ngo.get("/pending", ngoController.getPendingNGOs);

// Get all active ngo details
ngo.get("/active", ngoController.getActiveNGOs);

// Get ngo details by id
ngo.get("/:id", ngoController.getNgo);

// Update ngo status
ngo.put("/:id/status/:status", ngoController.updateStatus);

module.exports = ngo;
