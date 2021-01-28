//This colour array just represents thee colours that we have.
const colors = ["green", "red", "blue", "black", "purple", "pink", "yellow", "brown", "orange", "white", "grey", "navy", "maroon", "teal", "olive", "aqua", "fuchsia", "silver"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//add Event listener to the button, each time it is clicked the function is called.
btn.addEventListener("click", function () {

  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
//Each time i click on a button, i'll change the background colour for my body.
  document.body.style.backgroundColor = colors[randomNumber];
  //textContent returns text content of all elements
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}