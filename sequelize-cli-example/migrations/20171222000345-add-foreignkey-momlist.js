'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Momlists', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        Time: {
          type: Sequelize.STRING
        },
        Activity: {
          type: Sequelize.STRING
        },
        Notes: {
          type: Sequelize.STRING
        },
        Done: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        dadId: {  //This should have added an new column but it didn't
            type: Sequelize.INTEGER,
            onDelete:'CASCADE',
            references:{
                model:'ToDos',
                key:'id',
                as:'dadId'
            }
        }
      });
      },
      down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Momlists');
    }
};
