const express = require("express");
const { getHistoryLogs, getHistoryLog, createHistoryLog, deleteHistoryLog, updateHistoryLog } = require("../controllers/historyLogController");
const requireAuth = require("../middleware/requireAuth");


const recordRoutes = express.Router();

// require auth for all workout routes
recordRoutes.use(requireAuth)

// GET all waitinglists
recordRoutes.get('/', getHistoryLogs);

// GET a waitinglist
recordRoutes.get('/:id', getHistoryLog);

// POST a new waitinglist
recordRoutes.post('/', createHistoryLog);

// DELETE a waitinglist
recordRoutes.delete('/:id', deleteHistoryLog);

// UPDATE a waitinglist
recordRoutes.patch('/:id', updateHistoryLog);

module.exports = recordRoutes;