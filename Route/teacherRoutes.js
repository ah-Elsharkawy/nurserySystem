const express = require("express");
const router = express.Router();
const multer = require("multer")
const {getTeachers, addTeacher, updateTeachers, getTeacherById, deleteTeacherById, getTeacherSupervisors} = require("../Controller/teacherController");
const upload = require("../MW/multerMW");


router.route("/teachers")
.get(getTeachers)
.put(updateTeachers)
.post(upload.single('image') ,addTeacher)

/* router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // Handle multer errors
        console.error("Multer error:", err);
        res.status(400).json({ error: "Multer error" });
    } else {
        next(err); // Pass other errors to the default Express error handler
    }
}); */

router.route("/teachers/:id")
.get(getTeacherById)
.delete(deleteTeacherById)

router.get("/teachers/supervisors", getTeacherSupervisors)

module.exports = router;