const WaitingList = require("../models/waitingListModel");
const mongoose = require("mongoose");

//  get all waitingLists
const getWaitingLists = async (req, res) => {
    const waitingList = await WaitingList.find({}).sort({ createdAt: -1 });

    res.status(200).json(waitingList);
}

// get a single waitingList
const getWaitingList = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const waitingList = await WaitingList.findById(id);

    if (!waitingList) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(waitingList);
}

// create a waitingList
const createWaitingList = async (req, res) => {
    const { rollno, name } = req.body;
    const user_id = req.user._id;

    //add to db
    try {
        const waitingList = await WaitingList.create({ rollno, name, user_id });
        res.status(200).json(waitingList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a waitingList
const deleteWaitingList = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const waitingList = await WaitingList.findOneAndDelete({ _id: id });

    if (!waitingList) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(waitingList);
}

// update a waitingList
const updateWaitingList = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such waiting list" })
    }

    const waitingList = await WaitingList.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!waitingList) {
        return res.status(404).json({ error: "No such waiting list" });
    }
    res.status(200).json(waitingList);
}

module.exports = {
    getWaitingLists,
    getWaitingList,
    createWaitingList,
    deleteWaitingList,
    updateWaitingList
}