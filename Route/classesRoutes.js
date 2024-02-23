const express = require("express");
const router = express.Router();

const {getAllClasses, getClassById, addClass, updateClasses, deleteClassById, getClassTeacher, getClassChildren} = require("../Controller/classController");


router.route("/class")
.get(getAllClasses)
.post(addClass)
.put(updateClasses)

router.route(`/class/:id`)
.get(getClassById)
.delete(deleteClassById)

router.get(`/classChildren/:id`, getClassChildren);
router.get("/classTeacher/:id", getClassTeacher);

module.exports = router;