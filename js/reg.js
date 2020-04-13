  // REGISTER SERVICE WORKER
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("sw.js")
        .then(function() {
          console.log("SW = Good!");
        })
        .catch(function() {
          console.log("SW = Failed!");
        });
    });
  } else {
    console.log("SW = Not Available!");
  }