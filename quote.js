async function fetchData() {
    try {
        const response = await fetch('https://zenquotes.io/api/today');
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayQuote(quote, author) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="quote">"${quote}"</div>
        <div class="author">- ${author}</div>
    `;
}

async function fetchAndDisplayQuote() {
    const data = await fetchData();
    displayQuote(data.q, data.a);
}

fetchAndDisplayQuote();