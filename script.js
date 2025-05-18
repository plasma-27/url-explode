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

function extractUrls(text) {
  const urlRegex = /\b(?:https?:\/\/)?(?:www\.)?[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s]*)?/gi;
  const matches = text.match(urlRegex);
  return matches || [];
}

function openUrls() {
  const text = document.getElementById('urls').value.trim();

  const urlList = extractUrls(text);

  if (urlList.length === 0) {
    alert("No URLs found.");
    return;
  }

  urlList.forEach(url => {
    const formattedUrl = url.startsWith('http') ? url : 'https://' + url;
    window.open(formattedUrl, '_blank');
  });
}
