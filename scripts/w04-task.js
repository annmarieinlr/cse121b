/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Annmarie SanSevero",
    photo: "images/headshot.jpg",
    favoriteFoods: ['pasta', 'salad', 'strawberries', 'meatballs', 'chocolate'],
    hobbies: ['violin', 'tap dancing', 'singing', 'trying not to die'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: "Staten Island, NY",
    length: "15 years"
},
{
    place: "Fort Worth, TX",
    length: "2 years"
}, 
{
    place: "Little Rock, AR",
    length: "Too long..."
}
    )

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

//document.querySelector("img").src = myProfile.photo;
document.querySelector("#photo").setAttribute("alt", "Profile image of Annmarie SanSevero");


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby  => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let dt = document.createElement('dt');
    dt.textContent = location.place;
    let dd = document.createElement('dd');
    dd.textContent = location.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
    
});



