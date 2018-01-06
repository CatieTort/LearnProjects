'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bakings',
      [
        {
         name: 'Sourdough',
         ingredients: "flour, yeast, sourdough starter",
         temp: 400,
         favorite: true,
         createdAt: new Date(),
         updatedAt: new Date(),
         familyId: 1

       },
       {
        name: 'Cinnamon Rolls',
        ingredients: "flour, butter, sugar, vanilla, yeast, cinnamon, peacans, rasins, powdered sugar, milk, eggs",
        temp: 350,
        favorite: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        familyId:2

      },
      {
       name: 'Garlic Twists',
       ingredients: "flour, garlic, olive oil, butter, yeast, parsley",
       temp: 375,
       favorite: true,
       createdAt: new Date(),
       updatedAt: new Date(),
       familyId:3

      }

      ]
     )},

      down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Bakings', null, {})
  }
};
