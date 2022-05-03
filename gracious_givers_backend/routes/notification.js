// Author: Arjun Naravula Loganathan
const express = require("express");
const router = express.Router();

//Notification controller
const notificationController = require('../controllers/notification');

//Notification URL endpoints
router.get("/adminNotification", notificationController.getAdminNotification);
router.get("/ngoNotification", notificationController.getNgoNotification);

module.exports = router;
