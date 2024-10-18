'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jokes', [
      { content: 'Quelle est la femelle du hamster ? L\'Amsterdam.', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Que dit un oignon quand il se cogne ? Aïe.', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Quel est l\'animal le plus heureux ? Le hibou, parce que sa femme est chouette', createdAt: new Date(), updatedAt: new Date() },
      { content: 'Pourquoi le football c\'est rigolo ? Parce que Thierry en rit', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jokes', null, {})
  }
};
