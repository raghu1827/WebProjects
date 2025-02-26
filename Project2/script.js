// Select form and listen for submit event
document.querySelector("form").addEventListener("submit", function (event) {
  // Select input fields and error message elements
  let username = document.getElementById("name").value.trim();
  let password = document.getElementById("password").value.trim();
  let userError = document.getElementById("user-error");
  let passError = document.getElementById("pass-error");

  // Reset previous error messages
  userError.textContent = "";
  passError.textContent = "";

  // Set isValid flag
  let isValid = true;

  // Username validation
  if (username === "") {
    userError.textContent = "Username is required!";
    // Make error message visible
    userError.style.color = "red";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passError.textContent = "Password is required!";
    // Make error message visible
    passError.style.color = "red";
    isValid = false;
  }

  // If validation fails, prevent form submission
  if (!isValid) {
    // Stops form submission if errors exist
    event.preventDefault();
  } else {
    alert("Login Successful!");
  }
});
