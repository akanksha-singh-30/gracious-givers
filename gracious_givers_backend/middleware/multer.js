const multer = require("multer");
const path = require("path");
//const shortid = require("shortid");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), "./uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);//
    },
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
        return cb(new Error("You can upload only image files!"));
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

module.exports = upload