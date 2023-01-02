import express from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import { cronJob } from '../public/worker';
import { router as violationRouter } from './routes/violation'
import redisClient from '../public/redisClient'

const app = express();

// Server port
const port = 8080;

// Options for CORS
const corsOptions: CorsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
};

const dataWorker = cronJob; 


app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/violations', violationRouter);

app.listen(port, () => {
    console.log(`Birdnest protection API is listening at port ${port}`);
});