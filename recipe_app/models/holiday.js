'use strict';
module.exports = (sequelize, DataTypes) => {
  var Holiday = sequelize.define('Holiday', {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    temp: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
    holiday: DataTypes.STRING
  }, {
    classMethods: {
        associate: function(models) {
            Holiday.belongsTo(models.Family,{
              foreignKey: 'familyId',
              onDelete: 'CASCADE'
        })
        },
            associate: function(models) {
                Holiday.belongsTo(models.Baking,{
                  foreignKey: 'bakingId',
                  onDelete: 'CASCADE'
            })
        }
    }
  });
  return Holiday;
};
