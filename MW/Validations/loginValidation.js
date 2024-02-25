const {body} = require("express-validator");

let validateLogin = [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isStrongPassword().withMessage("Invalid password")
]


module.exports = {validateLogin};