const express = require('express');
const router = express.Router();
const { Activity, Country } = require('../db');

router.post('/pactivities', async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  if (!name || !difficulty || !duration || !season || !countries || countries.length === 0) {
    return res.status(400).json({ message: 'Missing or invalid data in the request body' });
  }

  try {
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    await activity.setCountries(countries);

    res.json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;