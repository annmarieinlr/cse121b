// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#poke-data");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="Image of ${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList")
    const pokeList =data.results;
    //pokeList.sort();
    pokeList.forEach((item) => {
        const html = `<li data-url="${item.url}">${item.name}</li>`;
        pokeListElement.innerHTML += html; 
    });
}

getPokemon(url, doStuff);
console.log("second: ", results); 
getPokemon(urlList, doStuffList);
