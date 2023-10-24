import articles from "../aof.js";

// function test(articleNumber) {
//     switch (articleNumber) {
//         case "1": // Ensure the comparison is a string
//             const article = JSON.parse(articles);
//             const string = article.articles[0].content;
//             document.getElementById(articleNumber).innerHTML = string;
//             break;
//         default:
//             break;
//     }
// }



var numArticles = document.querySelectorAll(".aof").length; 

for (var i= 0; i < numArticles; i++ ) {
    document.querySelectorAll(".aof")[i].addEventListener("click", articleClick);
    //var articleNumber = this.button;

}



function articleClick() {
    alert("clicked");

    //get the id of the image clicked
    let elementId = e.target.id;

    // add image using the id
    var img = document.createElement("img");
    img.src = `/images/${elementId}.png`;
    var src = document.getElementById("verse");
    src.appendChild(img);

    

    
}


/* async getArticles Function using fetch()*/

const getArticles = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above
    const response = await fetch("articles-of-faith.json");
    let articleList = await response.json();
    console.log(articleList);

}
articles.init();