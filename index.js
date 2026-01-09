require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const Url = require('./models/Url');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to database.'))
    .catch(err => console.error(err));

app.post('/shorten', async (req, res) => {
    let {fullUrl} = req.body;
    
    fullUrl = formatUrl(fullUrl.trim());

    const existingUrl = await Url.findOne({fullUrl});
    if(existingUrl) {
        return res.json({shortUrl:`${BASE_URL}/${existingUrl.shortUrl}`});
    }

    const shortCode = nanoid(7);

    const newUrl = new Url({
        fullUrl,
        shortUrl: shortCode
    });

    await newUrl.save();
    res.json({shortUrl:`${BASE_URL}/${shortCode}`});
});

app.get('/:shortId', async (req, res) => {
    const urlData = await Url.findOne({shortUrl:req.params.shortId});

    if(urlData) {
        return res.redirect(urlData.fullUrl);
    } else {
        return res.status(404).send('URL not found.');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function formatUrl(url) {
    if(!url.startsWith('http://') && !url.startsWith('https://')) {
        return 'http://' + url;
    }
    return url;
};