module.exports = (sequelize, DataTypes) =>
  sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timestamps: true,
    paranoid: true
  });
