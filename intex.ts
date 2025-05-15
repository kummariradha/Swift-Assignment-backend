import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db';
import userRoutes from './src/routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
