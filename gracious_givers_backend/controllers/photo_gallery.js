// Author: Viraj Jigar Shah (B00879448)

const photoGallery = require("../models/PhotoGallery");
const { IMAGE_BASE_URL } = require('../middleware/config');

exports.home = async (req, res) => {

    try {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        console.log('finally!! HOME')

        const str = (req.query.eventID).toString();
        console.log(str)
        const images = await photoGallery.find({ eventID: str })
        console.log(images)

        return res.status(200).json(images)
    }
    catch (err) {
        console.log(err);
        const errorMessage = {
            message: err,
            success: false,
        };
        res.status(500).send(errorMessage);

    }
};

exports.deleteImages = async (req, res, next) => {
    try {
        console.log('finally!! DELETE')
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed

        console.log('===============id=====================')
        const id = req.body.event
        console.log(req.body)
        console.log(id)
        console.log('===============id=====================')

        photoGallery.deleteOne({ _id: id }, function (err) {
            if (err) {
                var error = 'Something bad happened, try again!';
                if (err.code === 11000) {
                    error = 'That email is already taken, try another.';
                }
            }
            else {
                console.log('deleted')
            }
        });
    } catch (e) {
        console.log(e);
    }
}

exports.uploads = async (req, res, next) => {
    try {
        console.log('finally!! UPLOADS')
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        const description = req.body.desc;
        const eventName = req.body.eventName;
        const eventID = req.body.eventID;

        console.log(description)
        console.log(eventName)
        console.log(eventID)
        console.log(typeof eventID)

        const imagePath = `${IMAGE_BASE_URL}/${req.file.filename}`
        console.log(imagePath)
        const imgObj = {
            eventID: eventID,
            description: description,
            image: imagePath
        }
        photoGallery.create(imgObj).then((img) => {
            console.log(img)
            return res.json(img)
        }).catch(err => {
            console.log(err)
        })
    }
    catch (e) {
        console.log(e);
    }
}
