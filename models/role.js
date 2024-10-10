'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.utilisateur, {
        through: 'roleutilisateur',  // Table intermédiaire
        foreignKey: 'id_utilisateur',
        as: 'utilisateur'

      }); 
    }
  }
  Role.init({
    id_utilisateur: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};