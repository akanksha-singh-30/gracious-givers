// Author: Viraj Jigar Shah (B00879448)

const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer');

//Photo gallery controller
const photoGalleryController = require('../controllers/photo_gallery');

//Photo gallery routes
router.get("/getFundraiserStory", photoGalleryController.home);
router.post("/addFundraiserStory", upload.single('NGOStory'), photoGalleryController.uploads);
router.post("/deleteFundraiserStory", upload.single('event'), photoGalleryController.deleteImages);

module.exports = router;
