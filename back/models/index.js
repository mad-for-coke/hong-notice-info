const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.category = require('./category')(sequelize, Sequelize);
db.board = require('./board')(sequelize, Sequelize);

db.User.hasMany(db.Post, { foreignKey: 'writers', sourcekey: 'id' });
db.Post.belongsTo(db.User, { foreignKey: 'writers', targetKey: 'id' });

db.User.hasMany(db.Comment, { foreignKey: 'commenters', targetKey: 'id' });
db.Comment.helongsTo(db.User, { foreignKey: 'commenters', targetKey: 'id' });

db.Category.hasMany(db.category, {
  foreignKey: 'categories',
  targetKey: 'category_id'
});
db.Post.helongsTo(db.board, { foreignKey: 'categories', targetKey: 'id' });

db.Board.hasMany(db.board, { foreignKey: 'boards', targetKey: 'type_id' });
db.Post.helongsTo(db.board, { foreignKey: 'boards', targetKey: 'id' });

db.Post.hasMany(db.Comment, { foreignKey: 'posts', targetKey: 'post_id' });
db.Comment.helongsTo(db.Post, { foreignKey: 'posts', targetKey: 'id' });

db.module.exports = db;
