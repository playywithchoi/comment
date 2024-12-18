import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/mongodb.js';
import commentRoutes from './api/comments.js';
import path from 'path';  // 경로를 처리하기 위해 추가

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'public'))); // public 폴더의 정적 파일을 서빙

// Routes
app.use('/api/comments', commentRoutes);

// Database Connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
