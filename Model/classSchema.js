const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema({
    _id: {type: Number, unique: true},
    className: {type: String, required: true},
    supervisor: {type: Number, ref: "teachers", required: true},
    children: [{type: Number, ref: "children"}]
})


Schema.plugin(AutoIncrement);
module.exports = mongoose.model("teachers", Schema);