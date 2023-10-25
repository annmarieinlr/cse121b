import test from "./test.js";




var selectedArticle = "";
var articles = document.querySelectorAll(".aof"); 

console.log('articles', articles)
for (var i= 0; i < articles.length; i++ ) {
    articles[i].addEventListener("click", articleClick);
    //var articleNumber = this.button;

}

document.getElementById('test-button').addEventListener('click', testArticle)

function testArticle() {
    var userAnswer = document.getElementById("articleInput");
    test(selectedArticle, userAnswer.value)
}


function articleClick(e) {
    //xalert("clicked");
    

  // Retrieve id from clicked element
        let elementId = e.target.id;
        selectedArticle = elementId;
        // add image using the id
        var img = document.createElement("img");
        img.src = `/images/article${elementId}.png`;
        var src = document.getElementById("verse");
        src.appendChild(img);
        //listening for the test input
    

};


test(elementId);