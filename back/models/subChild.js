/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const SubChild = sequelize.define(
    'SubChild',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci'
    }
  );
  SubChild.associate = db => {
    db.SubChild.belongsTo(db.SubParent); // 테이블에 UserId 컬럼이 생겨요
    db.SubChild.hasMany(db.Information);
  };
  return SubChild;
};
