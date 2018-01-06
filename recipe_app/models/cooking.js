'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cooking = sequelize.define('Cooking', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    temp: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Cooking.belongsTo(models.Family,{
            foreignKey: 'familyId',
            onDelete: 'CASCADE'
        })
      }
    }
  });
  return Cooking;
};
