module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    monday: DataTypes.BOOLEAN,
		tuesday: DataTypes.BOOLEAN,
		wednesday: DataTypes.BOOLEAN,
    thursday: DataTypes.BOOLEAN,
    friday: DataTypes.BOOLEAN
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Child, {
			foreignKey: {allowNull: true,defaultValue:0}
    });
  };

  return Schedule;
};
