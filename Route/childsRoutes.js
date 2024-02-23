const express = require("express");
const router = express.Router()

const {getAllChilds, getChildById, addChild, updateChilds, deleteChildById} = require("../Controller/childsController");

router.route("/child")
.get(getAllChilds)
.post(addChild)
.put(updateChilds)

router.route("/child/:id")
.get(getChildById)
.delete(deleteChildById)

module.exports = router;