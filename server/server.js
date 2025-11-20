import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { ConnectDB } from './app/config/db.js';
import userRouter from './app/routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

const loadDB = async () => {
    await ConnectDB();
}
loadDB();

const PORT = process.env.PORT || 3000;

app.get('/api' , (req , res) => {
    res.send('Api working');
})
app.use('/auth' , userRouter);

app.listen(PORT , (req , res) => {
    console.log(`Server : http://localhost:${PORT}`);
});