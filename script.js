function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function reportIncident() {
    const incidentType = document.getElementById('incident-type').value;
    const incidentDetails = document.getElementById('incident-details').value;
    const notification = `Incident Reported: ${incidentType} - ${incidentDetails}`;

    const notifications = document.getElementById('notifications');
    const newNotification = document.createElement('li');
    newNotification.textContent = notification;
    notifications.appendChild(newNotification);

    // Add to reported incidents list
    const reportedIncidents = document.getElementById('reported-incidents');
    const newIncident = document.createElement('li');
    newIncident.textContent = notification;
    reportedIncidents.appendChild(newIncident);

    // Clear input fields
    document.getElementById('incident-details').value = '';
}

function planRoute() {
    const startLocation = document.getElementById('start-location').value;
    const endLocation = document.getElementById('end-location').value;
    const routeInfo = `Route from ${startLocation} to ${endLocation}`;

    // Display route info (this is a placeholder)
    alert(`Planning route: ${routeInfo}`);

    // Add to recent routes list
    const recentRoutes = document.getElementById('recent-routes');
    const newRoute = document.createElement('li');
    newRoute.textContent = routeInfo;
    recentRoutes.appendChild(newRoute);

    // Clear input fields
    document.getElementById('start-location').value = '';
    document.getElementById('end-location').value = '';
}