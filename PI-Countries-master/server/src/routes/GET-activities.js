const express = require('express');
const router = express.Router();
const { Activity } = require('../db');

router.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;