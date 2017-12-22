'use strict';
module.exports = (sequelize, DataTypes) => {
  var ToDo = sequelize.define('ToDo', {
    Time: DataTypes.STRING,
    Activity: DataTypes.STRING,
    Notes: DataTypes.STRING,
    Done: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDo;
};