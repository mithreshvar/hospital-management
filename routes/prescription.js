const express = require("express");
const { getPrescriptions, createPrescription, deletePrescription, updatePrescription, getPrescriptionByUser, getMyPrescription, getPrescription } = require("../controllers/prescriptionController")
const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// require auth for all workout routes
recordRoutes.use(requireAuth)

// GET all prescriptions
recordRoutes.get('/', getPrescriptions);

// GET My prescription
recordRoutes.get('/my', getMyPrescription);

// GET My prescription
recordRoutes.get('/:id', getPrescription);

// GET a prescription by user_id
recordRoutes.get('/user/:id', getPrescriptionByUser);

// POST a new prescription
recordRoutes.post('/', createPrescription);

// DELETE a prescription
recordRoutes.delete('/:id', deletePrescription);

// UPDATE a prescription
recordRoutes.patch('/:id', updatePrescription);

module.exports = recordRoutes;