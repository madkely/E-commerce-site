'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Utilisateur', [
      {
        
        nom: 'John',
        email: 'john.doe@example.com',
        mot_passe:  await bcrypt.hash('password12345',13),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        nom: 'Doe',
        email: 'jane.doe@example.com',
        mot_passe:  await bcrypt.hash('password45678',13),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Utilisateur', null, {});
  }
};