const express = require("express");
const {httpGetAllLaunches, httpSaveLaunch, httpAbortLaunch} = require("./launches.controller");

const launchesRouter = express.Router();

// Create routes
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpSaveLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;
