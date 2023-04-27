const Prescription = require("../models/prescriptionModel");
const mongoose = require("mongoose");

//  get all Prescriptions
const getPrescriptions = async (req, res) => {

    const prescription = await Prescription.find({}).sort({ name: 1 });

    res.status(200).json(prescription);
}

//  get Prescription
const getPrescription = async (req, res) => {
    const { id } = req.params;

    const prescription = await Prescription.findById(id);

    if (!prescription) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(prescription);
}

//  get my Prescription
const getMyPrescription = async (req, res) => {
    const user_id = req.user._id

    const prescription = await Prescription.find({ user_id });

    if (!prescription) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(prescription);
}


// get a single Prescription by user_id
const getPrescriptionByUser = async (req, res) => {
    const { id } = req.params;

    console.log(id);
    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }
    console.log(id);
    const prescription = await Prescription.findOne({ user_id: id });

    if (!prescription) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(prescription);
}

// create a Prescription
const createPrescription = async (req, res) => {
    const { date, medicalProblem, temperature, days, prescription, user_id } = req.body;

    let emptyFields = []

    if (!date) {
        emptyFields.push('date')
    }
    if (!medicalProblem) {
        emptyFields.push('medicalProblem')
    }
    if (!temperature) {
        emptyFields.push('temperature')
    }
    if (!days) {
        emptyFields.push('days')
    }
    if (!prescription) {
        emptyFields.push('prescription')
    }
    if (!user_id) {
        emptyFields.push('user_id')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {

        const pres = await Prescription.create({ date, medicalProblem, temperature, days, prescription, user_id });
        res.status(200).json(pres);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a Prescription
const deletePrescription = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const prescription = await Prescription.findOneAndDelete({ _id: id });

    if (!prescription) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(prescription);
}

// update a Prescription
const updatePrescription = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const prescription = await Prescription.findOneAndUpdate({ user_id: id }, {
        ...req.body
    });

    if (!prescription) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(prescription);
}

module.exports = {
    getPrescriptions,
    createPrescription,
    deletePrescription,
    updatePrescription,
    getPrescriptionByUser,
    getMyPrescription,
    getPrescription
}