'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.commandes, {
      
        as: 'commandes'
      });

      this.belongsTo(models.categorie, {
        as: 'categorie',
  
      });


    }
  }
  Produits.init({
    id_produit: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    prix: DataTypes.FLOAT,
    description: DataTypes.STRING,
    quantite_produit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produits',
  });
  return Produits;
};