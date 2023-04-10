const express = require("express");
//const adminPortal = require("../db/adminPortal")
const router = express.Router();
const multer = require ("multer");
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/upload")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('myImage');

router.get("/", function(req, res){
    res.sendFile(path.resolve('html/admin.html'));
});

router.post("/", function(req, res, next){
    upload(req, res , function (err) {
        const file = req.file
        if (!file) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
        }
        res.redirect(200,'http://localhost:3000/admin');
    })
    //adminPortal.insert();
})

// router.post('/upload', upload.single('myImage'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//       const error = new Error('Please choose files')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//     res.redirect(200,'http://localhost:3000/admin');
// })

module.exports = router