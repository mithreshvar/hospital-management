const mongoose = require('mongoose')

const Schema = mongoose.Schema

const prescriptionSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    medicalProblem: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
    prescription: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Prescription', prescriptionSchema)