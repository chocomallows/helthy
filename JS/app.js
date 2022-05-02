const form = document.getElementById("contact-form");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.querySelector(".form-control-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  const fnameInput = fname.value.trim();
  const emailInput = email.value.trim();
  const messageInput = message.value.trim();

  if (fnameInput === "") {
    setError(fname, "Name can not be blank");
  } else {
    setSuccess(fname);
  }

  if (emailInput === "") {
    setError(email, "Email can not be blank");
  } else if (!validateEmail(emailInput)) {
    setError(email, "Please enter a valid Email");
  } else {
    setSuccess(email);
  }

  if (messageInput === "") {
    setError(message, "Message can not be blank");
  } else {
    setSuccess(message);
  }

  if (
    fnameInput !== "" &&
    emailInput !== "" &&
    validateEmail(emailInput) &&
    messageInput !== ""
  ) {
    submitForm();
  }
}

function setError(element, message) {
  const formControl = element.parentElement;
  const error = formControl.querySelector(".error-msg");

  formControl.className = "form-control error";
  error.textContent = message;
}

function setSuccess(element) {
  const formControl = element.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  submitBtn.className = "form-control-btn loading";
  setTimeout(succesfullSubmit, 3000);
}

function succesfullSubmit() {
  submitBtn.className = "form-control-btn";
  const inputBtn = submitBtn.querySelector(".form-submit-btn");
  inputBtn.value = "Submit sent Succesfully!";
  setTimeout(setDefaults, 3000);
}

function setDefaults() {
  const inputBtn = submitBtn.querySelector(".form-submit-btn");
  inputBtn.value = "Submit another Message";

  fname.value = "";
  email.value = "";
  message.value = "";

  const allInputs = document.querySelectorAll(".form-control");
  allInputs.forEach((input) => (input.className = "form-control"));
}
