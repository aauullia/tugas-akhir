'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  barang.init({
    id_barang: DataTypes.INTEGER,
    nama_barang: DataTypes.STRING,
    id_toko: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'barang',
  });
  return barang;
};