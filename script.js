let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("colorInput");

const writeTextFieldContents = event => {
  event.preventDefault();

  let textInputContents = textInput.value;
  let colorInputContents = colorInput.value;

  console.log("The textInput value is: " + textInputContents);
  console.log("The textInput value is: " + colorInputContents);
};

let form = document.querySelector("form");

form.addEventListener("submit", writeTextFieldContents);

localStorage.setItem("textField1", textInputContents);   