const mongoose = require('mongoose')

const Schema = mongoose.Schema

const waitingListSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('WaitingList', waitingListSchema)