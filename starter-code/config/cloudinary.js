const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'test', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;