const PatientProfile = require("../models/patientProfileModel");
const mongoose = require("mongoose");

// function checkId(id) {
//     const regex = /^(2[1-5])(CS|EE|EC|CC|CB|ME|IT|AD|AM)([0-9][0-9][0-9])$/;

//     if (!mongoose.Types.ObjectId.isValid(id)) return true;
//     else if (id.match(regex)) return true;
//     return false;
// }

//  get all patientProfiles
const getPatientProfiles = async (req, res) => {
    //const user_id = req.user._id

    //const patientProfile = await PatientProfile.find({ user_id }).sort({ createdAt: -1 });
    const patientProfile = await PatientProfile.find({}).sort({ name: 1 });

    res.status(200).json(patientProfile);
}

//  get my patientProfile
const getMyPatientProfile = async (req, res) => {
    const user_id = req.user._id

    const patientProfile = await PatientProfile.findOne({ user_id });

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// get a single patientProfile
const getPatientProfile = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }

    const patientProfile = await PatientProfile.findById(id);

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// get a single patientProfile by rollno or email
const getPatientProfileByData = async (req, res) => {
    const { id } = req.params;

    let patientProfile;
    if (req.params['data'] === 'rollno') {
        // validating id to prevent server crash
        if (!id.match(/^(2[1-5])(CS|EE|EC|CC|CB|ME|IT|AD|AM)([0-9][0-9][0-9])$/)) {
            return res.status(404).json({ error: "Invalid rollno" })
        }
        patientProfile = await PatientProfile.findOne({ 'rollno': id });
    }
    // else if (req.params['data'] === 'email') {
    //     if (!validator.isEmail(email)) {
    //         return res.status(404).json({ error: "Email not valid" })
    //     }
    //     patientProfile = await PatientProfile.findOne({ 'email': id });
    // }


    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// get a single patientProfile by user_id
const getPatientProfileByUser = async (req, res) => {
    const { id } = req.params;

    console.log(id);
    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such patient profile" })
    }
    console.log(id);
    const patientProfile = await PatientProfile.findOne({ user_id: id });

    if (!patientProfile) {
        return res.status(404).json({ error: "No such patient profile" });
    }
    res.status(200).json(patientProfile);
}

// create a patientProfile
const createPatientProfile = async (req, res) => {
    const { rollno, name, year, classAndSec, gender, dob, bloodGroup, age, height, weight, allergies } = req.body;

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!rollno) {
        emptyFields.push('load')
    }
    if (!year) {
        emptyFields.push('year')
    }
    if (!classAndSec) {
        emptyFields.push('classAndSec')
    }
    if (!gender) {
        emptyFields.push('gender')
    }
    if (!dob) {
        emptyFields.push('dob')
    }
    if (!bloodGroup) {
        emptyFields.push('bloodGroup')
    }
    if (!age) {
        emptyFields.push('age')
    }
    if (!height) {
        emptyFields.push('height')
    }
    if (!weight) {
        emptyFields.push('weight')
    }
    if (!allergies) {
        emptyFields.push('allergies')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const user_id = req.user._id
        const patientProfile = await PatientProfile.create({ rollno, name, year, classAndSec, gender, dob, bloodGroup, age, height, weight, allergies, user_id });
        res.status(200).json(patientProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a patientProfile
const deletePatientProfile = async (req, res) => {
    const { id } = req.params;

    // validating id to prevent server crash
    if (!mongoose.Types.ObjectId.isValid(id)) {
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
    if (!mongoose.Types.ObjectId.isValid(id)) {
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
    updatePatientProfile,
    getPatientProfileByData,
    getPatientProfileByUser,
    getMyPatientProfile
}