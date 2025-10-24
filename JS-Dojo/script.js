function validateForm(event) {
  event.preventDefault(); // prevent form form submitting

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let feedback = document.getElementById("feedback");

  if (email === "") {
    feedback.textContent = "Email is required";
  } else if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters";
  } else {
    feedback.textContent = "Login successfull!";
  }
}