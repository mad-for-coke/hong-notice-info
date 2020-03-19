module.exports = (sequelize, DataTypes) =>
  sequelize.define('post', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    visit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    liked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    anonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },

    timestamps: true,
    paranoid: true
  });
