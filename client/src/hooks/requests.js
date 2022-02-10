const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
    const response = await fetch(API_URL + '/planets')
    console.log(response)
    // Load planets and return as JSON.
    return await response.json();
}

async function httpGetLaunches() {
    const response = await fetch(API_URL + '/launches')
    console.log(response)
    // Load planets and return as JSON.
    let fetchedLaunches = await response.json();
    return fetchedLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber;
    });
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
    try {
        return await fetch(API_URL + '/launches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(launch)
        })
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }

}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
    try {
        return await fetch(API_URL + "/launches/" + id, {
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
        return {
            ok: false
        }
    }

}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
};