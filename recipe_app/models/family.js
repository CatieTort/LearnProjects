'use strict';
module.exports = (sequelize, DataTypes) => {
  var Family = sequelize.define('Family', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Family.hasMany(models.Baking,{
            foreignKey: 'familyId',
            as: 'Bakings'
      })
},
      associate: function(models) {
          Family.hasMany(models.Cooking,{
            foreignKey: 'familyId',
            as: 'Cookings'
      })
  },
      associate: function(models) {
          Family.hasMany(models.Holiday,{
            foreignKey: 'familyId',
            as: 'Holidays'
        })
      }
    }
});
  return Family;
};
