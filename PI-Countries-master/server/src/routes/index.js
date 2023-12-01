const express = require('express');
const getCountriesRouter = require('../routes/GET-countries');
const getCountryByIdRouter = require('../routes/GET-countriesid');
const getCountryByNameRouter = require('../routes/GET-countriesname');
const getActivitiesRouter = require('../routes/GET-activities');
const postActivitiesRouter = require('../routes/POST-activities');

const router = express.Router();

router.use('/countries', getCountriesRouter);
router.use('/:idPais', getCountryByIdRouter);
router.use('/name', getCountryByNameRouter);
router.use('/activities', getActivitiesRouter);
router.use('/pactivities', postActivitiesRouter);

module.exports = router;