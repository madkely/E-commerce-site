'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProduitCommande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProduitCommande.init({
    id_commande: DataTypes.INTEGER,
    id_produit: DataTypes.INTEGER,
    quantite: DataTypes.INTEGER,
    prix: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ProduitCommande',
  });
  return ProduitCommande;
};