/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    'User', //테이블 이름은 users 가 됩니다 !!!
    {
      login_id: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      nickname: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      student_id: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci' // 한글이 저장돼요
    }
  );

  User.associate = db => {
    db.User.hasMany(db.Post, { as: 'Posts' });
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  };

  return User;
};
