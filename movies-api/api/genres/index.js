import express from 'express';
import { genres } from './genresData';

const router = express.Router(); 

// Get movie details
router.get('/', (req, res) => {
  res.status(200).json(genres)
});

export default router; 