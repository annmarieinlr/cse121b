/*

Home page: Have the articles of faith listed at the top of the page with an option to choose one. 

User can choose which  article of faith they want to work on. 
On clicking Art. of Faith #: a graphic of that article of faith pulls up. Beneath it is a "Test Me" button. 
On clicking "Test me": Graphic is hidden and an input box is made available along with a "Check Me" button. 

User inputs the text. When the check me button is chosen, the input will be compared to the text in the json file.
 If correct, a celebratory graphic will pop up. 
 If incorrect, a try again, will pop up, along with the graphic and "Test me" button. 
*/


//let articleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var numArticles = document.querySelectorAll(".aof").length; 

for (var i= 0; i < numArticles; i++ ) {
    document.querySelectorAll(".aof")[i].addEventListener("click", articleClick);

}

function articleClick() {
    alert("I've been clicked!")
   
}

document.addEventListener("click", function(e) {

    var img = document.createElement("img");
    img.src = "/images/article" + e.this + ".png";
    var src = document.getElementById("article");
    src.appendChild(img);
});


/*



*/
