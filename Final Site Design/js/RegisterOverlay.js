function showRegisterOverlay() {
	console.log("register show");
	document.getElementById("registerOverlay").style.display = "block";
};

function hideRegisterOverlay() {
	console.log("register hide");
	document.getElementById("registerOverlay").style.display = "none";
};

function showUnregisterOverlay(overlayId) {
	console.log("unregister show");
	document.getElementById(overlayId).style.display = "block";
};

function hideUnregisterOverlay(overlayId) {
	console.log("unregister hide");
	document.getElementById(overlayId).style.display = "none";
};