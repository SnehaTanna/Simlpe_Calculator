const inputs = document.querySelectorAll(".click");
const output = document.querySelector("#input");

let str = "";

const displayOutput = (event) => {
  const clickedElement = event.target; // Get the specific clicked element
  if (clickedElement.innerText === "=") {
    str = eval(str);
    output.value = str;
  } else if (clickedElement.innerText === "C") {
    str = str.slice(0, -1);
    output.value = str;
  } else if (clickedElement.innerText === "AC") {
    str = "";
    output.value = str;
  } else {
    str += clickedElement.innerText;
    output.value = str;
  }
};

inputs.forEach((input) => {
  input.addEventListener("click", displayOutput);
});
