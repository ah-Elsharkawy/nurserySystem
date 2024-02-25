const { validationResult } = require("express-validator");
const path  = require("path");
const fs = require("fs");

module.exports = (req, res, next) => {
    const result = validationResult(req);

    // delete the image if the data not valid
    if(req.file)
    {
        fs.unlink(`./Images/${req.file.filename}`, err => {
            if(err)
                console.log("Image is not deleted after invalid data")
            else
                console.log("Image is deleted after invalid data")
        });
    }
    
    if (!result.isEmpty()) {
        const errors = result.array().map(error => error.msg);
        return res.status(422).json({ errors: errors });
    }
    next();
};

