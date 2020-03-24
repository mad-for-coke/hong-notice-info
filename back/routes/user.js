const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
  //   return res.json('success11');
}); //정보 알아오기
router.post('/', (req, res) => {}); //회원가입
router.get('/:id', (req, res) => {}); //특정 유저 정보 가져오기
router.delete('/', (req, res) => {}); //탈퇴
router.patch('/', (req, res) => {}); //특정 개인정보 변경
router.get('/:id/posts', (req, res) => {}); //특정 유저가 쓴 글
router.get('/user/:id/posts', (req, res) => {});
router.post('/login', (req, res) => {}); //로그인 + passport(local 전략) auth 절차 거치기

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
}); //로그아웃

module.exports = router;
