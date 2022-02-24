// intialize the count as 0
let count = 0;
let countEl = document.getElementById("counter");
let saveEl = document.getElementById("save-item");

// listen for clicks on the increment button
// increment the count variable when the button is clicked
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let saveStr = count + " - ";
  saveEl.textContent += saveStr;
  countEl.textContent = 0;
  count = 0;
}
