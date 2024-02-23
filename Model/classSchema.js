const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    _id: {type: Number, unique: true},
    className: {type: String, required: true},
    supervisor: {type: Number, ref: "teachers", required: true},
    children: [{type: Number, ref: "children"}]
})