"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roleUtilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Utilisateur, {
        foreignkey: "id_utilisateur",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Role, {
        foreignkeys: "id_utilisateur",
        onDelete: "CASCADE",
      });
    }
  }
  roleUtilisateur.init(
    {
      id_role: DataTypes.INTEGER,
      id_utilisateur: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "roleUtilisateur",
    }
  );
  return roleUtilisateur;
};
