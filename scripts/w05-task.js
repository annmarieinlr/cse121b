/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");
        //populate imgElement
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        
        //Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        articleElement.appendChild(templeName);
        articleElement.appendChild(img);

        //Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(articleElement);
    });
}



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList);

}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    switch (document.querySelector('#sortBy').value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date (temple.dedication) < new Date ( 1950, 0, 1)));
        case "all":
            displayTemples(temples);
            break;
    }
}



getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});