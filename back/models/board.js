module.exports = (sequelize, DataTypes) => {
  sequelize.define('board', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.VARCHAR(100),
      allowNULL: false
    }
  });
};
