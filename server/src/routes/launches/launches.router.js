const express = require("express");
const {httpGetAllLaunches, httpSaveLaunch} = require("./launches.controller");

const launchesRouter = express.Router();

// Create routes
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpSaveLaunch);

module.exports = launchesRouter;
