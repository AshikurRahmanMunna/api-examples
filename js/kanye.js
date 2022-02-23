const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

function displayQuotes(quote) {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quote.quote;
}