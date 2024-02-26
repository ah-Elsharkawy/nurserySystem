const {body, param} = require("express-validator")


let validateNewPassword = [
    body("newPassword")
    .notEmpty()
    .withMessage("you habve to provide ap assword")
    .isStrongPassword()
    .withMessage("your password have to be at least 8 characterss long with lowercase, uppercase, numbers and special characters")
]

module.exports = validateNewPassword;