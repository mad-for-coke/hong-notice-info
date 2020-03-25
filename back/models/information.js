/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const Information = sequelize.define(
    'Information',
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci'
    }
  );
  Information.associate = db => {
    db.Information.belongsTo(db.SubChild);
  };
  return Information;
};
