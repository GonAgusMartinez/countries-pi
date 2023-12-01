const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { Country, Activity } = require('../db');

router.get('/name', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Missing name parameter' });
  }

  try {
    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });

    if (countries.length > 0) {
      res.json(countries);
    } else {
      res.status(404).json({ message: 'No countries found with the given name' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;