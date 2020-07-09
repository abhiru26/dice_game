var randomDiceNumber = Math.floor((Math.random() * 6) + 1);
var randomImage = "dice" + randomDiceNumber + ".png";
var imageSource = "images/" + randomImage;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", imageSource);

document.querySelector("h1").innerHTML = "ohoo!! its " + randomDiceNumber;
//document.querySelector("h4").innerHTML = "go forward buddy by" + randomDiceNumber;
