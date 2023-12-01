require('dotenv').config();
const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
  native: false,
});

const modelDefiners = [];
const modelsPath = path.join(__dirname, '/models');

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(modelsPath, file));
    modelDefiners.push(model(sequelize));
  });

const { Country, Activity } = sequelize.models;

Activity.belongsToMany(Country, { through: 'CountryActivity' });
Country.belongsToMany(Activity, { through: 'CountryActivity' });

const models = {
  Country,
  Activity,
};

const capitalizedModels = Object.keys(models).reduce((acc, modelName) => {
  const capitalizedName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  acc[capitalizedName] = models[modelName];
  return acc;
}, {});

module.exports = {
  ...capitalizedModels,
  conn: sequelize,
};