'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.produits, {
        // Clé étrangère pour associer un utilisateur
        as: 'produits',
        foreignKey: 'id_produit'
      });

    }
  }
  Categorie.init({
    id_category: DataTypes.INTEGER,
    id_produit: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorie',
  });
  return Categorie;
};