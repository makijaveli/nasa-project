const launches = new Map();

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

module.exports = {
    getAllLaunches
}