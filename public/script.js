const cpyBtn = document.getElementById('copyBtn');

document.getElementById('shortenBtn').addEventListener('click', async () => {
    const fullUrl = document.getElementById('fullUrl').value;
    const resultContainer = document.getElementById('resultContainer');
    const shortLink = document.getElementById('shortLink');

    if (!fullUrl) {
        alert("Please enter a URL!");
        return;
    }

    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fullUrl})
        });

        const data = await response.json();

        if (data.shortUrl) {
            shortLink.href = data.shortUrl;
            shortLink.innerText = data.shortUrl;
            resultContainer.style.display = 'flex';
            cpyBtn.innerText = "Copy";
        }
    } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred.");
    }
});

cpyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(shortLink.innerText);
        cpyBtn.innerText = "Copied!";

        setTimeout(() => {
            cpyBtn.innerText = "Copy";
        }, 2000);
    } catch (err) {
        console.error("Failed to copy the link: ", err);
        alert("Failed to copy the link.");
    }
});