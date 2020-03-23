/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      lock: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      visit: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0'
      },
      anonymous: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      }
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci'
    }
  );
  Post.associate = db => {
    db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
    db.Post.hasMany(db.Comment);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    db.Post.belongsTo(db.Category);
    db.Post.belongsTo(db.Board);
  };
  return Post;
};
