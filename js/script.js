const button = document.querySelector(".container button");
const counter = document.querySelector(".counter");
const inputs = document.querySelector(".inputs");

let number;
let intervalId;

button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp)

function handleMouseDown () {
    number = 0;
    this.textContent = "Release to stop counting";
    inputs.innerHTML = "";
    intervalId = setInterval(function () {
        number++;
        counter.innerHTML = number;
    }, 1000);   
};

function handleMouseUp() {
    clearInterval(intervalId);
    this.textContent = "Press and hold to count";

    for (let i = 1; i <= number; i++) {
        inputs.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
    }
}