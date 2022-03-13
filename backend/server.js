const express = require('express');
const profiles = require('./data/profiles');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.get('/api/profiles', (req, res) => {
    res.json(profiles);
})

app.get('/api/profiles/:id', (req, res) => {
    const profile = profiles.find(p => p.id === req.params.id);
    res.json(profile);
})

app.listen(5000, console.log('working server'));