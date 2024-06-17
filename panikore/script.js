
function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  // JavaScript for hiding the loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
      loader.style.display = 'none';
  }, 1000); // Adjust the time as needed (here, 1000ms = 1 second)
});
