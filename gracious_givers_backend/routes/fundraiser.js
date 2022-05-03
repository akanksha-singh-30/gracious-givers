// Author: Akanksha Singh (B00892887)

const express = require("express");
const router = express.Router();

//Importing fundraiser controller
const fundraiserController = require('../controllers/fundraiser');

//add fundraiser
// router.post("/", upload.single('image'), fundraiserController.createFundraiser);
router.post("/", fundraiserController.createFundraiser);

// Get all pending fundraisers
router.get("/pending", fundraiserController.getPendingFundraisers);

// Get fundraiser details by id
router.get("/:id", fundraiserController.getFundraiser);

// Get fundraiser by period
router.get("/ngo/:ngoId/period/:period", fundraiserController.getFundraiserByPeriod);

// Get fundraiser by cause
router.get("/cause/:cause", fundraiserController.getFundraiserByCause);

// Update fundraiser 
router.put("/:id/ngo/:ngoId", fundraiserController.updateFundraiser);

router.put("/:id/status/:status", fundraiserController.updateStatus)

router.delete("/:id/ngo/:ngoId", fundraiserController.deleteFundraiser);

module.exports = router;

