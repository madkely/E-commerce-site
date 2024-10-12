"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Commandes, {
        foreignKey: "id_utilisateur",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.Role, {
        through: "roleutilisateur", // Table intermédiaire
        foreignKey: "id_utilisateur",
        as: "roles",
      });
    }
  }

  Utilisateur.init(
    {
      id_utilisateur: DataTypes.INTEGER,
      nom: DataTypes.STRING,
      mot_passe: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Utilisateur",
    }
  );
  return Utilisateur;
};
