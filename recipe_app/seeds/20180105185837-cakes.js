'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Holidays',
      [
        {
         name: 'Easter Cake',
         ingredients: "flour, ricotta, cinnamon, butter, brown sugar, vanilla, eggs, baking soda",
         temp: 350,
         favorite: false,
         createdAt: new Date(),
         updatedAt: new Date(),
         familyId: 1,
         bakingId: 8

       },
       {
        name: 'Fruit Cake',
        ingredients: "flour, butter, sugar, brown sugar, vanilla, baking soda, eggs, green gummies, currants, rasins",
        temp: 400,
        favorite: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        familyId: 2,
        bakingId: 9

      },
      {
       name: 'Chocolate Peppermint Cake',
       ingredients: "flour, chocolate, butter, peppermint candies, vanilla, baking soda, eggs",
       temp: 375,
       favorite: true,
       createdAt: new Date(),
       updatedAt: new Date(),
       familyId: 3,
       bakingId: 11

     }
      ]
   )},

   down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Holidays', null, {})
  }
};
