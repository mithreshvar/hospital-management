const express = require("express");
const { createPatientProfile, getPatientProfile, getPatientProfiles, deletePatientProfile, updatePatientProfile, getPatientProfileByData, getPatientProfileByUser, getMyPatientProfile } = require("../controllers/patientProfileController");
const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// require auth for all workout routes
recordRoutes.use(requireAuth)

// GET all PatientProfiles
recordRoutes.get('/', getPatientProfiles);

// GET My PatientProfile
recordRoutes.get('/my', getMyPatientProfile);

// GET a PatientProfile
recordRoutes.get('/:id', getPatientProfile);

// GET a PatientProfile by rollno
//recordRoutes.get('/:data/:id', getPatientProfileByData);

// GET a PatientProfile by user_id
recordRoutes.get('/user/:id', getPatientProfileByUser);

// POST a new PatientProfile
recordRoutes.post('/', createPatientProfile);

// DELETE a PatientProfile
recordRoutes.delete('/:id', deletePatientProfile);

// UPDATE a PatientProfile
recordRoutes.patch('/:id', updatePatientProfile);

module.exports = recordRoutes;