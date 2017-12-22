'use strict';
module.exports = (sequelize, DataTypes) => {
  var Momlist = sequelize.define('Momlist', {
    Time: DataTypes.STRING,
    Activity: DataTypes.STRING,
    Notes: DataTypes.STRING,
    Done: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
    Momlist.hasOne(models.Todo, {foreignKey: 'dadId'})
      }
    }
  });
  return Momlist;
};
