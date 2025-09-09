const form = document.getElementById("signin-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  let isValid = true;

  const emailVal = email.value.trim();
  const passVal = password.value.trim();

  if (!validateEmail(emailVal)) {
    setError(email, "Enter a valid email")
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (passVal.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (isValid) {
    alert("Sign in successful!");
    form.reset();
    document.querySelectorAll(".input-group").forEach(group => {
      group.classList.remove("success");
    });
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}
