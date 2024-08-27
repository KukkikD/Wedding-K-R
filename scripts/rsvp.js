document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "thank_you.html"; // Redirect to the Thank You page
});