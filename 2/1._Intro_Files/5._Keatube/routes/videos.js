const router = require("express").Router();

const crypto = require("crypto");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const filename = crypto.randomBytes(20).toString("hex");
        const mimeTypeArray = file.mimetype.split("/");
        if (mimeTypeArray[0] === "video") {
            const extension = mimeTypeArray[mimeTypeArray.length - 1];
            cb(null, fileName + "." + extension);
        } else {
            cb("Not a video error. Mimetype: " + file.mimetype);
        }
    }
});
const upload = multer({ storage: storage});

const videosPerPage = 10;

module.exports = router;

// 2nd april video teams