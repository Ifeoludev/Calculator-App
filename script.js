"use strict";

const inputValue = document.getElementById("user-input");
const themeSlider = document.getElementById("themeSlider");
const body = document.body;

//For handling the numbers(1, 2, 3, 4, ....)
document.querySelectorAll(".numbers").forEach((button) => {
  button.addEventListener("click", () => {
    if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    inputValue.innerText += button.innerText.trim();
  });
});

//For Handling the operations(*, /, +,...)
document.querySelectorAll(".operations").forEach((button) => {
  button.addEventListener("click", () => {
    const text = inputValue.innerText.trim();
    const value = button.innerText.trim();

    if (value === "RESET") {
      inputValue.innerText = "0";
    } else if (value === "DEL") {
      inputValue.innerText = text.slice(0, -1) || "0";
    } else if (value === "=") {
      try {
        inputValue.innerText = eval(text.replace("x", "*"));
      } catch {
        inputValue.innerText = "NaN";
      }
    } else {
      const lastNum = text[text.length - 1];
      if (!isNaN(lastNum) || lastNum === ".") {
        inputValue.innerText += value === "x" ? "*" : value;
      }
    }
  });
});

// For the Theme Change
themeSlider.addEventListener("input", () => {
  body.className = "theme-" + themeSlider.value;
});
