const express = require("express");
const router = express.Router()

const {getAllChilds, getChildById, addChild, updateChilds, deleteChildById} = require("../Controller/childsController");

const {validateChildData, checkChildIdInBody, checkChildIdInParams} = require("../MW/Validations/childValidation")

const validator = require("../MW/Validations/validator")

const {isAdmin} = require("../MW/authMW")

router.route("/child")
.get(getAllChilds)
.post(isAdmin, validateChildData, validator, addChild)
.put(validateChildData, checkChildIdInBody, validator,updateChilds)

router.route("/child/:id")
.all(checkChildIdInParams, validator)
.get(getChildById)
.delete(isAdmin ,deleteChildById)

module.exports = router;