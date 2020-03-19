module.exports = (sequelize, DataTypes) =>
  sequelize.define('user', {
    login_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    eamil: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'local'
    },
    student_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    timestamps: true,
    paranoid: true
  });
