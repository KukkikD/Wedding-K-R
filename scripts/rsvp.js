// Define the URL for JSON data and the thank you page URL
const jsonURL = 'https://kukkikd.github.io/weddingkr/rsvp.json; // URL for storing RSVP data

document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (!rsvpForm) {
        console.error('Error: RSVP form element is not found in the document.');
        return;
    }

    rsvpForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(rsvpForm);
        const formObject = Object.fromEntries(formData.entries());
        
        try {
            // Send form data to JSON file or server
            await fetch(jsonURL, {
                method: 'POST', // or 'PUT' if updating existing data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            // Show the confirmation message
            rsvpForm.style.display = 'none'; // Hide the form
            confirmationMessage.style.display = 'block'; // Show the thank you message
        } catch (error) {
            console.error('Error sending RSVP data:', error);
        }
    });
});
