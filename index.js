const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
let selectedRating = "";

// Loop through each rating element and add a click event
ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive(); // Remove 'active' class from other ratings
    event.target.parentNode.classList.add("active"); // Add 'active' to selected rating
    selectedRating = event.target.parentNode.querySelector("small").innerText; // Get rating text
  });
});

// Function to remove active class from all ratings
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

// Show feedback text after clicking the button
btnEl.addEventListener("click", () => {
  if (selectedRating) {
    document.getElementById("container").innerHTML = `
      <h1 class="heading">Feedback</h1>
      <div class="feedback-message">
        <p>Feedback: <strong>${selectedRating}</strong></p>
        <p style="font-weight: 700">Thank you!</p>
        <p>We'll use your feedback to improve our customer support.</p>
      </div>
    `;
  } else {
    alert("Please select a rating before submitting!");
  }
});
