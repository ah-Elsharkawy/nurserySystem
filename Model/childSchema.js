const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const addressSchema = mongoose.Schema({
    city: {type: String},
    street: {type: Number},
    building: {type: Number}
})


const Schema = mongoose.Schema({
    _id: {type: Number, unique: true},
    fullName: {type: String,  required: true},
    age: {type: Number, required: true},
    level: {type: String, enum:["PreKG", "KG1", "KG2"], required: true},
    address: addressSchema
})

Schema.plugin(AutoIncrement);
module.exports = mongoose.model("children", Schema);