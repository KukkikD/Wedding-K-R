function showMessage() {
    const message = document.getElementById('message').value;
    const thankYouMessage = document.getElementById('thank-you-message');
    if (message.trim() !== '') {
        thankYouMessage.textContent = `Thank you for your message: "${message}"`;
        document.getElementById('message').value = ''; // Clear the textarea
    } else {
        thankYouMessage.textContent = 'Please enter a message before sending.';
    }
}
