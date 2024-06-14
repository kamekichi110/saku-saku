// Copyright かめ太の住処 All Right Reserved.
function top() {
    window.location.href = "./";
}
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