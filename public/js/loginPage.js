const loginForm = document.querySelector(".login-form");
const sec = document.querySelector('.content');

if(sec.dataset.togo){
  let inf = sec.dataset.togo;
  localStorage.setItem('info',inf);
  let obj = JSON.parse(inf);
  location.href= '/'+obj.pos;
}

function handleSubmit(e) {
  if (loginForm["uname"].value.trim() === "") {
    loginForm["uname"].classList.add("red");
    e.preventDefault();
  } else {
    loginForm["uname"].classList.remove("red");
  }
  if (loginForm["position"].value === "select") {
    loginForm["position"].classList.add("red");
    e.preventDefault();
  } else {
    loginForm["position"].classList.remove("red");
  }
}

loginForm.addEventListener("submit", handleSubmit);
