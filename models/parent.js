module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define('Child', {
    name_first: DataTypes.STRING,
    name_last: DataTypes.STRING,
  });
  Child.associate = function(models) {
    Child.hadMany(models.Child, {
      onDelete: 'cascade',
    });
  };

  return Children;
};
