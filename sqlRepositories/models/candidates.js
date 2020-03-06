/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('candidates', {
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		uuid: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'candidates',
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		timestamps: true
	});
};
