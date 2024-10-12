"use strict";
const { Model } = require("sequelize");
const produits = require("./produits");
module.exports = (sequelize, DataTypes) => {
  class Pannier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Produits, {
        foreignKey: "id_produit", // Clé étrangère pour associer un produit
        as: "produits",
        onDelete: "CASCADE",
      });
    }
  }
  Pannier.init(
    {
      id_pannier: DataTypes.INTEGER,
      id_produit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pannier",
    }
  );
  return Pannier;
};
