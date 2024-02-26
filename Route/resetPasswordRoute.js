const express = require("express")
const router = express.Router();
const resetPassword = require("../Controller/resetPasswordController")

const validateNewPasswor = require("../MW/Validations/resetPasswordValidation");
const validator = require("../MW/Validations/validator")


router.post("/resetPassword/:id",validateNewPasswor, validator, resetPassword);

module.exports = router;
