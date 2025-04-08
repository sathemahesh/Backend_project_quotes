import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import quoteRoutes from './routes/quoteRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/quotes', quoteRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ DB connection error:', err));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


