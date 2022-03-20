import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import profileRoutes from './routes/profileRoutes.js';
dotenv.config();
connectDb();
const app = express();
app.get('/', (req, res) => {
    res.send('Hi!');
});
app.use('/api/profiles', profileRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
const ENV = process.env.ENV;
app.listen(PORT, () => {
    console.log(`Server running in ${ENV} mode on ${PORT}!!!`);
});
//# sourceMappingURL=server.js.map