const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const historyLogSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true,
    },
    prescription_id: {
        type: ObjectId,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('HistoryLog', historyLogSchema)