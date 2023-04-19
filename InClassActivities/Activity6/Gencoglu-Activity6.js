let time = 2500;
let level = 0;
let clickCounter = 0;

const myButton = document.getElementById("btn");

window.onload = function () {
    myButton.onclick = clickedButton;
};

function clickedButton() {
    clickCounter += 1;
  if (clickCounter == 3) {
    level += 1;
    alert(`You passed level ${level-1}! You can go next level ${level}`);
    time -= 100;
    clickCounter = 0;
  }
}

setTimeout(function main() {
  myFunction();
  setTimeout(main, time);
}, 500);

function myFunction() {
clickCounter=0;
  myButton.style.position = "absolute";
  myButton.style.top = Math.floor(Math.random() * 300) * 2 + "px";
  myButton.style.left = Math.floor(Math.random() * 500) * 2 + "px";
}
