const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  let isValid = true;

  const firstnameVal = firstname.value.trim();
  const lastnameVal = lastname.value.trim();
  const passVal = password.value.trim();
  const emailVal = email.value.trim();
  const mobileVal = mobile.value.trim();

  
  if (firstnameVal === "") {
    setError(firstname, "First name is required");
    isValid = false;
  } else {
    setSuccess(firstname);
  }


  if (lastnameVal === "") {
    setError(lastname, "Last name is required");
    isValid = false;
  } else {
    setSuccess(lastname);
  }

  
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(passVal)) {
    setError(password, "Password must be 6+ chars & include letters & numbers");
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (!validateEmail(emailVal)) {
    setError(email, "Enter a valid email");
    isValid = false;
  } else {
    setSuccess(email);
  }

  
  if (!/^\d{10}$/.test(mobileVal)) {
    setError(mobile, "Enter a valid 10-digit number");
    isValid = false;
  } else {
    setSuccess(mobile);
  }

  
  if (isValid) {
    alert("Form submitted successfully!");
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

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
};
