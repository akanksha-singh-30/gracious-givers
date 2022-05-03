// Author: Jay Bhagvanbhai Sonani (B00891984)

const express = require("express");
const router = express.Router();

//Importing donation controller
const donationController = require('../controllers/donation');

//add donation
router.post("/addDonation", donationController.addDonation);

//get all donation
router.get("/alldonations", donationController.allDonations);

//get all donations of specific event
router.get("/alldonations/:id", donationController.allDonationsOfAnEvent);

//get top donors of specific event
router.get("/topdonors/:id", donationController.topDonors)

module.exports = router;

