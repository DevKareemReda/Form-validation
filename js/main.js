let form = document.querySelector("form");
let contactUser = document.getElementById("contact-user");
let contactEmail = document.getElementById("contact-email");
let contactPass = document.getElementById("contact-pass");
let confirmPass = document.getElementById("confirm-pass");
let contactMessage = document.getElementById("contact-message");
let count = document.querySelector(".count");
let eye = document.querySelector(".eye");

form.addEventListener("submit", (error) => {
 if (
  !contactUser.value.match(/^(\w+)\s{1}(\w+)$/gi) ||
  !contactEmail.value.match(/^(\w+)@(\w+)\.(\w+){2}$/gi) ||
  !contactPass.value.match(
   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gi
  ) ||
  contactMessage.value.length !==
   Number(contactMessage.getAttribute("maxlength")) ||
  contactPass.value !== confirmPass.value
 ) {
  // invoke parameter called is error
  error.preventDefault();
 }
 // excute All function
 validUser();
 validEmail();
 validPass();
 validConfPass();
 validMessage();
});

function validUser() {
 let getParent = contactUser.parentElement;
 let getChild = getParent.querySelector(".invalid");

 if (contactUser.value === "") {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> Required the name`;
  // add Class active to change style border bottom in input filed
  contactUser.classList.add("active");
  // add Class active to show invalid
  getChild.classList.add("active");
  return;
 }
 if (!contactUser.value.match(/^(\w+)\s{1}(\w+)$/gi)) {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> please enter at latest 2 chars with space`;
  // add Class active to change style border bottom in input filed
  contactUser.classList.add("active");
  // add Class active to show invalid
  getChild.classList.add("active");
  // remove Class active to hidden check icons
  contactUser.nextElementSibling.classList.remove("active");
  return;
 }
 // remove Class active to hidden invalid
 getChild.classList.remove("active");
 // add Class active to change style border bottom in input filed
 contactUser.classList.remove("active");
 // add Class active to show check icons
 contactUser.nextElementSibling.classList.add("active");
 return;
}
contactUser.onblur = validUser;
contactUser.oninput = validUser;

function validEmail() {
 let getParent = contactEmail.parentElement;
 let getChild = getParent.querySelector(".invalid");

 if (contactEmail.value === "") {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> Required the Email`;
  // add Class active to change style border bottom in input filed
  contactEmail.classList.add("active");
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to show check icons
  contactEmail.nextElementSibling.classList.remove("active");
  return;
 }
 if (!contactEmail.value.match(/^(\w+)@(\w+)\.(\w+){2}$/gi)) {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> invalid Email`;
  // add Class active to change style border bottom in input filed
  contactEmail.classList.add("active");
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to show check icons
  contactEmail.nextElementSibling.classList.remove("active");
  return;
 }
 // remove Class active to hidden invalid
 getChild.classList.remove("active");
 // add Class active to change style border bottom in input filed
 contactEmail.classList.remove("active");
 // remove Class active to hidden check icons
 contactEmail.nextElementSibling.classList.add("active");
 return;
}
contactEmail.onblur = validEmail;
contactEmail.oninput = validEmail;

function validPass() {
 let getParent = contactPass.parentElement;
 let getChild = getParent.querySelector(".invalid");
 if (contactPass.value === "") {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> the password is empty`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to remove style border bottom in input filed
  contactPass.classList.add("active");
  return;
 }
 if (
  !contactPass.value.match(
   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}\S$/i
  )
 ) {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> please enter at latest 8 chars`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to change style border bottom in input filed
  contactPass.classList.add("active");
  // add attr disabled when reg exp equle false
  confirmPass.setAttribute("disabled", "disabled");
  // change value in confirm password
  confirmPass.value = "";
  // remove Class active to hidden check icons
  contactPass.nextElementSibling.classList.remove("active");
  // remove Class active to hidden style border bottom in input filed
  confirmPass.classList.remove("active");
  return;
 }
 // remove Class active to hidden invalid
 getChild.classList.remove("active");
 // remove Class active to remove style border bottom in input filed
 contactPass.classList.remove("active");
 // remove attr disabled when reg exp equle true
 confirmPass.removeAttribute("disabled");
}
contactPass.onblur = validPass;
contactPass.oninput = validPass;

function validConfPass() {
 let getParent = confirmPass.parentElement;
 let getChild = getParent.querySelector(".invalid");
 if (confirmPass.value === "") {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true""></i>
   please repeat password`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to show style border bottom in input filed
  confirmPass.classList.add("active");
  return;
 }
 if (contactPass.value !== confirmPass.value) {
  // remove Class active to hidden check icons
  contactPass.nextElementSibling.classList.remove("active");
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true""></i>
   password is'nt match`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // chnage style invalid
  getChild.style.color = "var(--errorColor)";
  // add Class active to show style border bottom in input filed
  confirmPass.classList.add("active");
  return;
 }
 getChild.innerHTML = `
 <i class="error fa fa-check-circle" aria-hidden="true" style="color: var(--mainColor)"></i>
  password is match`;
 // chnage style invalid
 getChild.style.color = "var(--mainColor)";
 // add Class active to show invalid
 getChild.classList.add("active");
 setTimeout(() => {
  // remove Class active to hidden invalid
  getChild.classList.remove("active");
 }, 1000);
 // add Class active to show check icons
 contactPass.nextElementSibling.classList.add("active");
 // remove Class active to remove style border bottom in input filed
 contactPass.classList.remove("active");
 // remove Class active to hidden style border bottom in input filed
 confirmPass.classList.remove("active");
 return;
}
// confirmPass.onblur = validConfPass;
confirmPass.oninput = validConfPass;

function eyeChange() {
 // change password to text when click on eye
 if (contactPass.type === "password" || confirmPass.type === "password") {
  contactPass.type = "text";
  confirmPass.type = "text";
  eye.classList.replace("fa-eye-slash", "fa-eye");
  return;
 }
 contactPass.type = "password";
 confirmPass.type = "password";
 eye.classList.replace("fa-eye", "fa-eye-slash");
}
eye.onclick = eyeChange;

function validMessage() {
 let getParent = contactMessage.parentElement;
 let getChild = getParent.querySelector(".invalid");

 let counterLength = contactMessage.getAttribute("maxlength");
 let getValue = contactMessage.value.length;

 if (getValue === 0) {
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> Message is required`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to change style border bottom in input filed
  contactMessage.classList.add("active");
 } else if (getValue <= Number(counterLength)) {
  count.innerHTML = (getValue * counterLength) / counterLength;
  getChild.innerHTML = `
  <i class="error fa fa-exclamation-circle" aria-hidden="true"></i> please enter ${counterLength} chars`;
  // add Class active to show invalid
  getChild.classList.add("active");
  // add Class active to change style border bottom in input filed
  contactMessage.classList.add("active");
 }
 if (getValue === Number(counterLength)) {
  // add Class active to show invalid
  getChild.classList.remove("active");
  // add Class active to change style border bottom in input filed
  contactMessage.classList.remove("active");
 }
}
contactMessage.onblur = validMessage;
contactMessage.oninput = validMessage;
