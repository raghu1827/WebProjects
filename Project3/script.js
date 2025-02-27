// Prevent Empty Submission and Validate Fields
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();
    let consent = document.getElementById("consent").checked;

    // Basic validation
    if (name === "" || email === "" || phone === "" || age === "") {
      alert("Please fill out all required fields.");
      return;
    }

    if (!consent) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone number format
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    form.submit();
  });
});

// Validate Email and Phone Number
function validateEmail(email) {
  let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validatePhone(phone) {
  let re = /^[+0-9]{10,15}$/;
  return re.test(phone);
}

// Show selected feedback options
document.querySelectorAll("input[name='like[]']").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    let selectedOptions = [];
    document
      .querySelectorAll("input[name='like[]']:checked")
      .forEach((item) => {
        selectedOptions.push(item.value);
      });
    console.log("Selected Likes:", selectedOptions);
  });
});

// Enhance User Experience with Real-time Character Count
let textarea = document.getElementById("suggestions");
if (textarea) {
  let charCount = document.createElement("p");
  charCount.style.fontSize = "12px";
  charCount.style.color = "gray";
  textarea.parentNode.appendChild(charCount);

  textarea.addEventListener("input", function () {
    charCount.textContent = `Characters: ${textarea.value.length}/250`;
    charCount.style.color = textarea.value.length > 250 ? "red" : "gray";
  });
}

// Reset form fields on Reset button click
document
  .querySelector("button[type='reset']")
  .addEventListener("click", function () {
    setTimeout(() => {
      alert("Form has been reset.");
    }, 100);
  });
