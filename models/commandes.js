"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commandes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Utilisateur, {
        foreignKey: "id_utilisateur", // Clé étrangère pour associer un utilisateur
        as: "utilisateur",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Produits, {
        foreignKey: "id_produits", // Clé étrangère pour associer un produit
        as: "produits",
        onDelete: "CASCADE",
      });
    }
  }
  Commandes.init(
    {
      id_commande: DataTypes.INTEGER,
      id_utilisateur: DataTypes.INTEGER,
      statut_commande: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Commandes",
    }
  );
  return Commandes;
};
