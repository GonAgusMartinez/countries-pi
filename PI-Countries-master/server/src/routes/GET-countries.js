const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Country, Activity } = require('../db');

router.get('/countries', async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;