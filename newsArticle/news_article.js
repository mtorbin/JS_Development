var xhr = new XMLHttpRequest();

var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var newsText = document.createElement('p');
        const articleText =article.news_text;
        const textNode = document.createTextNode(articleText);
        newsText.appendChild(textNode);

        // newsText.textContent = article.news_text;        // directly assigned to p element

        articleDiv.appendChild(title);
        articleDiv.appendChild(newsText);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();