const express = require("express");
const router = express.Router()
const {getTeachers, addTeacher, updateTeachers, getTeacherById, deleteTeacherById, getTeacherSupervisors} = require("../Controller/teacherController");


router.route("/teachers")
.get(getTeachers)
.put(updateTeachers)
.post(addTeacher)

router.route("/teachers/:id")
.get(getTeacherById)
.delete(deleteTeacherById)

router.get("/teachers/supervisors", getTeacherSupervisors)

module.exports = router;