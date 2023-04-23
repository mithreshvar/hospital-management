const express = require("express");
const { createWaitingList, getWaitingList, getWaitingLists, deleteWaitingList, updateWaitingList } = require("../controllers/waitingListController");


const recordRoutes = express.Router();

// GET all waitinglists
recordRoutes.get('/', getWaitingLists);

// GET a waitinglist
recordRoutes.get('/:id', getWaitingList);

// POST a new waitinglist
recordRoutes.post('/', createWaitingList);

// DELETE a waitinglist
recordRoutes.delete('/:id', deleteWaitingList);

// UPDATE a waitinglist
recordRoutes.patch('/:id', updateWaitingList);

module.exports = recordRoutes;