// backend/routes/scan.js
const express = require('express');
const router = express.Router();
const { analyzeImage } = require('../utils/aiAnalyzer');

router.post('/', (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const result = analyzeImage(image);
    res.json(result);
  } catch (error) {
    console.error('Error during scan:', error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

module.exports = router;
