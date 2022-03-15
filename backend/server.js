import express from 'express';
import profiles from './data/profiles.js';
import dotenv from 'dotenv';

dotenv.config()

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


const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'development';

app.listen(PORT, console.log(`Server running in ${ENV} mode on ${PORT}`));