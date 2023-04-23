const PatientProfile = require("../models/patientProfileModel");
const mongoose = require("mongoose");

function checkId(id) {
    const regex = /^(2[1-5])(CS|EE|EC|CC|CB|ME|IT|AD|AM)([0-9][0-9][0-9])$/;

    if (!mongoose.Types.ObjectId.isValid(id)) return true;
    else if (id.match(regex)) return true;
    return false;
}

//  get all patientProfiles
const getPatientProfiles = async (req, res) => {
    const patientProfile = await PatientProfile.find({}).sort({ createdAt: -1 });

    res.status(200).json(patientProfile);
}

// get a single patientProfile
const getPatientProfile = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (checkId(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const patientProfile = await PatientProfile.findById(id);

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// create a patientProfile
const createPatientProfile = async (req, res) => {
    const { rollno, name, year, classAndSec, gender, dob, bloodGroup, height, weight, allergies } = req.body;

    //add to db
    try {
        const patientProfile = await PatientProfile.create({ rollno, name, year, classAndSec, gender, dob, bloodGroup, height, weight, allergies });
        res.status(200).json(patientProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a patientProfile
const deletePatientProfile = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (checkId(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const patientProfile = await PatientProfile.findOneAndDelete({ _id: id });

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// update a patientProfile
const updatePatientProfile = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (checkId(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const patientProfile = await PatientProfile.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

module.exports = {
    getPatientProfiles,
    getPatientProfile,
    createPatientProfile,
    deletePatientProfile,
    updatePatientProfile
}