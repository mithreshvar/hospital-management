const express = require("express");
const { createPatientProfile, getPatientProfile, getPatientProfiles, deletePatientProfile, updatePatientProfile } = require("../controllers/patientProfileController");


const recordRoutes = express.Router();

// GET all PatientProfiles
recordRoutes.get('/', getPatientProfiles);

// GET a PatientProfile
recordRoutes.get('/:id', getPatientProfile);

// POST a new PatientProfile
recordRoutes.post('/', createPatientProfile);

// DELETE a PatientProfile
recordRoutes.delete('/:id', deletePatientProfile);

// UPDATE a PatientProfile
recordRoutes.patch('/:id', updatePatientProfile);

module.exports = recordRoutes;