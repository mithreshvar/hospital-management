const HistoryLog = require("../models/historyLogModel");
const mongoose = require("mongoose");

//  get all HistoryLogs
const getHistoryLogs = async (req, res) => {
    const historyLog = await HistoryLog.find({}).sort({ createdAt: -1 });

    res.status(200).json(historyLog);
}

// get a single HistoryLog
const getHistoryLog = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const historyLog = await HistoryLog.findById(id);

    if (!historyLog) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(historyLog);
}

// create a HistoryLog
const createHistoryLog = async (req, res) => {
    const { rollno, name, user_id, prescription_id } = req.body;

    //add to db
    try {
        const historyLog = await HistoryLog.create({ rollno, name, user_id, prescription_id });
        res.status(200).json(historyLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a HistoryLog
const deleteHistoryLog = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const historyLog = await HistoryLog.findOneAndDelete({ _id: id });

    if (!historyLog) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(historyLog);
}

// update a HistoryLog
const updateHistoryLog = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const historyLog = await HistoryLog.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!historyLog) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(historyLog);
}

module.exports = {
    getHistoryLogs,
    getHistoryLog,
    createHistoryLog,
    deleteHistoryLog,
    updateHistoryLog
}