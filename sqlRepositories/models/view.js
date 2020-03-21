/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'view'
  });
};
