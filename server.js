const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, '.')));

app.get('/giphy', async (req, res) => {
    try {
        const apiKey = process.env.GIPHY_API;
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cowboy`);
        const data = await response.json();
        res.json({ imageUrl: data.data.images.downsized_large.url });
    } catch (err) {
        res.status(500).send('Failed to fetch GIPHY.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});