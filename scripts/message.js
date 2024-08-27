function saveAndShowMessage() {
    // Get the message from the textarea
    const message = document.getElementById('message').value;

    // Get existing messages from localStorage
    let messages = JSON.parse(localStorage.getItem('weddingMessages')) || [];

    // Add the new message to the array
    if (message) {
        messages.push(message);
        localStorage.setItem('weddingMessages', JSON.stringify(messages));

        // Display all messages
        showMessageCards(messages);

        // Clear the textarea
        document.getElementById('message').value = '';
    } else {
        alert("Please enter a message.");
    }
}

function showMessageCards(messages) {
    const messageCardsContainer = document.getElementById('message-cards');
    messageCardsContainer.innerHTML = ''; // Clear existing cards

    messages.forEach((message) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<p>${message}</p>`;
        messageCardsContainer.appendChild(card);
    });
}

function loadMessages() {
    // Retrieve messages from localStorage
    const storedMessages = JSON.parse(localStorage.getItem('weddingMessages')) || [];

    // Display them
    showMessageCards(storedMessages);
}

// Load the messages when the page loads
window.onload = loadMessages;

function autoScroll() {
    const messageCarousel = document.querySelector('.message-carousel');
    let scrollAmount = 0;

    function scrollStep() {
        scrollAmount += 2; // Adjust scroll speed
        if (scrollAmount >= messageCarousel.scrollWidth - messageCarousel.clientWidth) {
            scrollAmount = 0; // Reset scroll to the start
        }
        messageCarousel.scrollLeft = scrollAmount;
    }

    setInterval(scrollStep, 50); // Adjust the interval for speed
}

// Start auto-scrolling when the page loads
window.onload = function() {
    loadMessages();
    autoScroll();
};

