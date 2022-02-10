const {getAllLaunches, addNewLaunch, checkLaunch, deleteLaunchById} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpSaveLaunch(req, res) {
    // Get request body
    const launch = req.body;
    // Check request data
    console.log(launch)
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) return res.status(400).json({
        error: 'Missing request parameters!'
    })
    // Convert date
    launch.launchDate = new Date(launch.launchDate);
    // Check if date is converted
    if (isNaN(launch.launchDate.valueOf())) return res.status(400).json({
        error: "Invalid launch date!"
    })
    // Call function
    addNewLaunch(launch);
    // Return response
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    // Extract launches ID from request
    const launchId = Number(req.params.id);
    console.log("ID for deleting: " + launchId)
    // Check if launch exists
    if (!checkLaunch(launchId)) {
        return res.status(404).json({
            error: 'Launch not found!'
        })
    }
    // Launch exists, abort it
    const aborted = deleteLaunchById(launchId);
    return res.status(200).json(aborted);

}

module.exports = {
    httpGetAllLaunches,
    httpSaveLaunch,
    httpAbortLaunch
};