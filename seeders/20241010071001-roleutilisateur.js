// 'use strict';

// const role = require('../models/role');

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Récupérer les identifiants des utilisateurs et des rôles
//     const utilisateur = await queryInterface.sequelize.query(
//       SELECT id FROM utilisateur;
//     );
    
//     const roles = await queryInterface.sequelize.query(
//       SELECT id, name FROM role;
//     );
//     // Obtenir les IDs de différents rôles
//     const adminRole = roles[0].find(role => role.name === 'Admin');
//     const userRole = roles[0].find(role => role.name === 'utilisateur');

//     // Obtenir les IDs des utilisateurs (par exemple, premier utilisateur est Admin)
//     const adminUser = utilisateur[0][0]; // Prend le premier utilisateur
//     const regularUser = utilisateur[0][1]; // Prend le deuxième utilisateur

//     // Associer les utilisateurs avec les rôles
//     await queryInterface.bulkInsert('roleutilisateur', [
//       {
//         user_id: adminUser.id, // Assigner le premier utilisateur au rôle d'Admin
//         role_id: adminRole.id,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         user_id: regularUser.id, // Assigner le deuxième utilisateur au rôle User
//         role_id: userRole.id,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});
//   },


//   async down (queryInterface, Sequelize) {
    
//      await queryInterface.bulkDelete('roleutilisateur', null, {});
//   }

// };
