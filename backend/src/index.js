import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import studentRoutes from './routes/student.routes.js';

const PORT = 5000

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/students', studentRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})