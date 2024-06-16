const newsTable = document.querySelector('#news');

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

function loadNews() {
    var src = './db/news.json';
    loadJson(src)
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            newsTable.innerHTML += "<p>" + data[i] + "</p>";
        }
    });
}
loadNews();