const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Country = sequelize.define(
    'Country',
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flagImage: {
        type: DataTypes.STRING, // Puedes cambiar el tipo según tus necesidades
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.FLOAT,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la creación automática de timestamps (createdAt, updatedAt)
    }
  );

  return Country;
};