function getArticleGenerator(articles) {

    let textElements = articles;

    return () => {
        
        if (textElements.length > 0) {
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let currentText = textElements.shift();
            article.innerText = currentText;
            container.appendChild(article);
        }
    };
}
