const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.post('/', (req, res) => {}); //내가 글쓰기
router.post('/images', (req, res) => {}); //이미지 뭐시기
router.get('/:id', (req, res) => {}); //특정 글 가져오기
router.delete('/:id', (req, res) => {}); //글 삭제
router.get('/:id/comments', (req, res) => {}); //특정 글에 달린 모든댓글 가져오기
router.post('/:id/comments', (req, res) => {}); //특정 글에 댓글 추가하기
router.patch('/:id/comments', (req, res) => {}); //특정 댓글 수정
router.post('/:id/like', (req, res) => {}); //좋아요
router.delete('/:id/like', (req, res) => {}); //좋아요취소

module.exports = router;
