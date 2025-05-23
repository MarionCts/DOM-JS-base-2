// Creating a "ul" element and pushing it after the element conteneur
let newList = document.createElement("ul");
let conteneur = document.querySelector("#conteneur");
conteneur.append(newList);

// Creating and giving some text to the first "li" element
let newLiFirst = document.createElement("li");
newLiFirst.textContent = "Apprendre JavaScript";

// Creating and giving some text to the second "li" element
let newLiSecond = document.createElement("li");
newLiSecond.textContent = "Pratiquer la manipulation du DOM";

// Creating and giving some text to the third "li" element
let newLiThird = document.createElement("li");
newLiThird.textContent = "Créer un projet";

let liArray = [newLiFirst, newLiSecond, newLiThird];

for (let i = 0; i < liArray.length; i++) {
    newList.append(liArray[i]);
    console.log(liArray[i]);
    
}