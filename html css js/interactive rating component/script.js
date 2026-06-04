
  const ratings = document.querySelectorAll(".rating h2");
  const selectedRating = document.getElementById("selectedRating");

  ratings.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all
      ratings.forEach(r => r.classList.remove("active"));

      // Add active class to selected rating
      item.classList.add("active");

      // Store selected value
      selectedRating.value = item.dataset.rating;
    });
  });

  document.getElementById("ratingForm").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!selectedRating.value) {
      alert("Please select a rating");
      return;
    }

    alert("Selected Rating: " + selectedRating.value);
  });

