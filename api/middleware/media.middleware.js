const multer = require("multer");

// Photo Storage
const photoStorage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

// Photo Upload Middleware 
const MediaHandlerMiddleware = multer({
    storage: photoStorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true)
        } else {
            cb({ message: "Unsupported file format" }, false)
        }
    },
    limits: { fileSize: 1024 * 1024 } // 1 megabyte
})


module.exports = MediaHandlerMiddleware