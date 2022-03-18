import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import profileRoutes from "./routes/profileRoutes.js";
dotenv.config();
connectDb();
const app = express();
app.get('/', (req, res) => {
    res.send('Hi!');
});
app.use('/api/profiles', profileRoutes);
const PORT = process.env.PORT;
const ENV = process.env.ENV;
app.listen(PORT, () => { console.log(`Server running in ${ENV} mode on ${PORT}!!!`); });
//# sourceMappingURL=server.js.map