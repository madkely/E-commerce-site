'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // Insérer les rôles dans la table Roles
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin', // Nom du rôle
        description: 'Administrateur ayant tous les droits',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utilisateur', // Rôle utilisateur normal
        description: 'Utilisateur standard ayant des accès limités',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
  },

 

down: async (queryInterface, Sequelize) => {
  // Supprimer les rôles insérés si besoin
  await queryInterface.bulkDelete('Roles', null, {});

}
};
