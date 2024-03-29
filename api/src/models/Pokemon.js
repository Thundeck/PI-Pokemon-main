const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    sprites: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    heigth: {
      type: DataTypes.INTEGER,
    },
    weigth: {
      type: DataTypes.INTEGER,
    }
  },{ timestamps: false });
};
