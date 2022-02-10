const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true
}
// Set Map object wih key-value
launches.set(launch.flightNumber, launch);

// Prepare data for response
function getAllLaunches() {
    return Array.from(launches.values());
}

// Save new launch
function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            upcoming: true,
            customer: ['NASA', 'NOAO'],
            success: true
        }));
}

function checkLaunch(id) {
    console.log(id)
    console.log(launches.has(id))
    return launches.has(id);
}

function deleteLaunchById(id) {
    const aborted = launches.get(id);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    checkLaunch,
    deleteLaunchById
}