// Register service worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope: ", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed: ", error);
    });
}

function openUrls() {
  const urls = document.getElementById('urls').value.trim();
  
  // Split the input by newlines, commas, or semicolons and remove extra spaces
  const urlList = urls.split(/\s*[\n\r,;]\s*/).filter(function (url) {
      return url.trim().length > 0; // Filter out empty or invalid URLs
  });

  // Open each URL in a new tab without delay
  urlList.forEach(url => {
      if (url) {
          const formattedUrl = url.startsWith('http') ? url : 'https://' + url;
          window.open(formattedUrl, '_blank'); // Open each URL in a new tab
      }
  });
}

