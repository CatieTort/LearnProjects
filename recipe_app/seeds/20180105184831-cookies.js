'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Bakings',
     [
       {
        name: 'Chocolate Chip',
        ingredients: "flour, chocolate, butter, brown sugar, vanilla, baking soda, eggs",
        temp: 375,
        favorite: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        familyId: 1

      },
      {
       name: 'Sugar Cookie',
       ingredients: "flour, butter,sugar, vanilla, baking soda, eggs",
       temp: 375,
       favorite: true,
       createdAt: new Date(),
       updatedAt: new Date(),
       familyId: 3

     },
     {
      name: 'Ginger Snap',
      ingredients: "flour, ginger, molasses,  butter, brown sugar, vanilla, baking soda, eggs",
      temp: 375,
      favorite: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      familyId: 2

    }

     ]
 )},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bakings', null, {})
  }
};
