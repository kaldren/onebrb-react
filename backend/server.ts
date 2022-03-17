import express from 'express';
import dotenv from 'dotenv';
import colors from "colors";
import connectDb from './config/db';
import profiles from './data/profiles';

dotenv.config()

connectDb();

const app = express();

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.get('/api/profiles', (req, res) => {
    res.json(profiles);
})

app.get('/api/profiles/:id', (req, res) => {
    const profile = profiles.find((p: { id: string; }) => p.id === req.params.id);
    res.json(profile);
})


const PORT = process.env.PORT;
const ENV = process.env.ENV;

app.listen(PORT);