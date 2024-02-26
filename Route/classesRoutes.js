const express = require("express");
const router = express.Router();

const {getAllClasses, getClassById, addClass, updateClasses, deleteClassById, getClassTeacher, getClassChildren} = require("../Controller/classController");


router.route("/class")
.get(getAllClasses)
.post(addClass)

router.route(`/class/:id`)
.get(getClassById)
.delete(deleteClassById)
.put(updateClasses)

router.get(`/classChildren/:id`, getClassChildren);
router.get("/classTeacher/:id", getClassTeacher);

module.exports = router;