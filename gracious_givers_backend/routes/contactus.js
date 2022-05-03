// Author: Jay Bhagvanbhai Sonani (B00891984)

const express = require("express");
const router = express.Router();

const contactUsController = require('../controllers/contactus');

router.post("/", contactUsController.contactUs);

module.exports = router;

