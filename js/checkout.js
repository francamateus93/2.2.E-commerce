// Exercise 6
function validate() {
  let error = 0;
  // Get the input fields
  let fName = document.getElementById("fName");
  let fEmail = document.getElementById("fEmail");
  let fLastName = document.getElementById("fLastN");
  let fAddress = document.getElementById("fAddress");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  let preventDefault = document.getElementById("btn");

  // Get the error elements
  let errorName = document.getElementById("errorName");
  let errorEmail = document.getElementById("errorEmail");
  let errorLastName = document.getElementById("errorLastN");
  let errorAddress = document.getElementById("errorAddress");
  let errorPassword = document.getElementById("errorPassword");
  let errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  // preventDefault.addEventListener("click", function (event) {
  //   event.preventDefault();

  if (fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)) {
    error++;
    fName.classList.add("is-invalid");
    errorName.innerHTML =
      "This field must contain only letters and at least 3 characters.";
  }

  if (fLastName.value.length < 3 || !/^[A-Za-z]+$/.test(fLastName.value)) {
    error++;
    fLastName.classList.add("is-invalid");
    errorLastName.innerHTML =
      "This field must contain only letters and at least 3 characters.";
  }

  if (
    fEmail.value.length < 3 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)
  ) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.innerHTML =
      "This email is invalid. Ensure it is a correct email";
  }

  if (fAddress.value.length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
    errorAddress.innerHTML = "This field must contain at least 3 characters.";
  }

  if (fPhone.value.length < 9 || !/^\d+$/.test(fPhone.value)) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.innerHTML =
      "Invalid phone number. Ensure that contain only numbers and at least 9 digits";
  }

  if (fPassword.value.length < 3 || !/^[A-Za-z0-9]+$/.test(fPassword.value)) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.innerHTML =
      "Invalid Password. Ensure that contain letters and numbers and at least 3 characters.";
  }

  if (error > 0) {
    alert("There is somethign wrong. Fix the problem and send the form again.");
  } else {
    alert("Form submitted!");
  }
}
//   });
// }
