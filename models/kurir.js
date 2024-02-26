'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kurir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kurir.init({
    id_kurir: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    no_telepon: DataTypes.INTEGER,
    password: DataTypes.STRING,
    no_resi: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kurir',
  });
  return kurir;
};