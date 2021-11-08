const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".input");

function handleSubmit(e) {
  inputs.forEach((input) => {
    if (input.hasAttribute('required') && input.value.trim() === ""){
      input.classList.add("red");
      e.preventDefault();
    }
    else {
      input.classList.remove("red");
    }
  });
}

form.addEventListener("submit", handleSubmit);
