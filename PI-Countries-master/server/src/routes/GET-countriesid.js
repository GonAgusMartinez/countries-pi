const express = require('express');
const router = express.Router();
const { Country, Activity } = require('../db');

router.get('/:idPais', async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findByPk(idPais, {
      include: { model: Activity, attributes: ['id', 'name', 'difficulty', 'duration', 'season'] },
    });

    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ message: 'Country not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;