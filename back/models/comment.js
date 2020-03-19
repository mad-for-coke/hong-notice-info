module.exports = (sequelize, DataTypes) =>
  sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    anonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timestamps: true,
    paranoid: true
  });
