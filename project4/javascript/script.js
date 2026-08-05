//Displays the current date and time

//Called to update with the current date and time
function updateDateTime() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  };

  document.getElementById("datetime").textContent = now.toLocaleString(
    "en-US",
    options,
  );
}

// Run when the page loads
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// Validate the required contact form before submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (name.value.trim() === "") {
      alert("Please enter your name.");
      name.focus();
      event.preventDefault();
      return;
    }

    if (email.value.trim() === "") {
      alert("Please enter your email address.");
      email.focus();
      event.preventDefault();
      return;
    }
  });
}
