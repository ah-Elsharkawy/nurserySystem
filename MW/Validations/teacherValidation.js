const {body, check} = require("express-validator");

addTeacherValidation = [
    check("email")
      .trim()
      .isEmail()
      .custom(value => {
        return value.toLowerCase()})
      .withMessage("Invalid email"),
      
    body("password")
      .trim()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .withMessage('Password must contain lowercase, uppercase, number, and special character'),
    body("fullName")
      .trim()
      .isString()
      .withMessage("FullName must be string and at least 3 characters"),
  ]

module.exports = {addTeacherValidation};