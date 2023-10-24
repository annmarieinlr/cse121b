import articles from "../aof.js";

function test(articleNumber) {
    switch (articleNumber) {
        case "1": // Ensure the comparison is a string
            const article = JSON.parse(articles);
            const string = article.articles[0].content;
            document.getElementById(articleNumber).innerHTML = string;
            break;
        default:
            break;
    }
}

var numArticles = document.querySelectorAll(".aof").length; 

for (var i= 0; i < numArticles; i++ ) {
    document.querySelectorAll(".aof")[i].addEventListener("click", articleClick);
    //var articleNumber = this.button;

}



function articleClick() {
    alert("clicked");
    
}

articles.init();