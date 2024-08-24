// Define the URL for the thank you page
const thankYouPageURL = 'https://kukkikd.github.io/weddingkr/thank_you.html'; // Adjust the URL if needed

document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');

    if (!rsvpForm) {
        console.error('Error: RSVP form element is not found in the document.');
        return;
    }

    rsvpForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(rsvpForm);
        const formObject = Object.fromEntries(formData.entries());

        try {
            // Send form data to the server
            await fetch('/submit-rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });

            // Redirect to the thank you page
            window.location.href = thankYouPageURL;
        } catch (error) {
            console.error('Error sending RSVP data:', error);
        }
    });
});
