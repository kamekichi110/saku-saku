//Copy Right newsJS All Right Reserved.
//このJSライブラリは'jsonLoaderJS'が必要です。

//components
const newsDisplayArea = document.getElementById('news-area');

//functions

function createNewsList(url) {
    JsonLoader(url).then(data => {
        console.log('loaded JSON data => ', data);
        var newsData = data.news;
        var len = newsData.length;
        for(let i = 0; i > len; i++) {
        }
    })
}