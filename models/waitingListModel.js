const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

const waitingListSchema = new Schema({
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
    }
}, { timestamps: true })

module.exports = mongoose.model('WaitingList', waitingListSchema)