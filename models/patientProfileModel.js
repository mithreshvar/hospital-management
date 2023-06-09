const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientProfileSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    classAndSec: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('PatientProfile', patientProfileSchema)