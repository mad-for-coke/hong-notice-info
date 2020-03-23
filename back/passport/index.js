const passport = require('passport');
const db = require('../models');
const localStrategy = require('./localStrategy');

module.exports = () => {
  passport.serializeUser((user, done) => {
    //로그인 확인절차
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    //serializeUser 함수의 done함수의 두번쨰 인자가 첫번째인자 (id)로 들어온다
    try {
      const user = await db.User.findOne({
        where: { id },
        include: [
          {
            model: db.Post,
            as: 'Posts',
            attributes: ['id']
          },
          {
            model: db.Comment,
            attributes: ['id']
          }
        ]
      });
      return done(null, user); // req.user
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  localStrategy();
};
