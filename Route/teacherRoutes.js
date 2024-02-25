const express = require("express");
const router = express.Router();
const multer = require("multer");
const {getTeachers, addTeacher, updateTeachers, getTeacherById, deleteTeacherById, getTeacherSupervisors} = require("../Controller/teacherController");
const upload = require("../MW/multerMW");
const {addValidation} = require("../MW/Validations/teacherValidation");
const validator = require("../MW/Validations/validator");


router.route("/teachers")
.get(getTeachers)
.put(updateTeachers)
.post(addValidation, validator, upload.single('image') ,addTeacher)


router.route("/teachers/:id")
.get(getTeacherById)
.delete(deleteTeacherById)

router.get("/teachers/supervisors", getTeacherSupervisors)

module.exports = router;