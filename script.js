const form = document.getElementById("signupForm");
const confirmation = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Basic JavaScript validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const skill = form.skill.value;
  const portfolio = form.portfolio.value.trim();

  if (!name || !email || !skill) {
    alert("Please fill in all required fields.");
    return;
  }

  if (portfolio && !portfolio.startsWith("http")) {
    alert("Please enter a valid portfolio link starting with http or https.");
    return;
  }

  // Show confirmation
  confirmation.style.display = "block";

  // Clear form
  form.reset();
});
