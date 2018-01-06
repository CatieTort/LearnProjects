'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cookings',
      [
        {
         name: 'Pot Roast',
         ingredients: "Beef, beef stock, butter, potatoes, carrots, onion",
         temp: 400,
         favorite: true,
         createdAt: new Date(),
         updatedAt: new Date(),
         familyId: 1

       },
       {
        name: 'Chicken Curry',
        ingredients: "flour, curry paste, chicken, cumin",
        temp: 285,
        favorite: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        familyId:2

      },
      {
       name: 'Tofurkey',
       ingredients: "Soy, Spices, Almond flour, coconut oil ",
       temp: 200,
       favorite: false,
       createdAt: new Date(),
       updatedAt: new Date(),
       familyId:3

     }

      ]
   )},

   down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Cookings', null, {})
  }
};
