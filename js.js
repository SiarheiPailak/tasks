let element = document.getElementById("inputTel");
let maskOptions = {
  mask: "+{7}(000)000-00-00",
};
let mask = IMask(element, maskOptions);

let elemBut = document.getElementById("inputBut");

function toggleStatus() {
  if (document.querySelector("#checkCall").checked == false) {
    elemBut.setAttribute("disabled", "");
  } else {
    elemBut.removeAttribute("disabled");
  }
}

function alertfunc() {
  alert("Ваша заявка подтверждена");
}
