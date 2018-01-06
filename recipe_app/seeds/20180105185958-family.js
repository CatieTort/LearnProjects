'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Families',
     [
       {
        name: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
       name: 'Thompson',
       createdAt: new Date(),
       updatedAt: new Date()

     },
     {
      name: 'Jones',
      createdAt: new Date(),
      updatedAt: new Date()

    }

     ]
  )},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Families', null, {})
  }
};
