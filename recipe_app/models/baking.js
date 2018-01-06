'use strict';
module.exports = (sequelize, DataTypes) => {
  var Baking = sequelize.define('Baking', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    temp: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
          Baking.belongsTo(models.Family,{
            foreignKey: 'familyId',
            onDelete: 'CASCADE'
          })
      },
          associate: function(models) {
              Baking.hasOne(models.Holiday,{
                foreignKey: 'bakingId',
                as: 'Holidays'
          })
        }
      }
  });
  return Baking;
};
