/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const SubParent = sequelize.define(
    'SubParent',
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
  SubParent.associate = db => {
    db.SubParent.hasMany(db.SubChild, { as: 'sub' });
  };
  return SubParent;
};
