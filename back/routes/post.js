const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.post('/', async (req, res, next) => {
  //내가 글쓰기   로그인 확인 관련 미들웨어를 장착해주어야됨
  try {
    const newPost = await db.Post.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.body.UserId,
      anonymous: req.body.anonymous,
      CategoryId: req.body.CategoryId,
      BoardId: req.body.BoardId
    });
    console.log(newPost);
    return res.status(200).json(newPost);
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

router.post('/images', (req, res) => {}); //이미지 뭐시기 ---- 잘못 생각한 것이다 이렇게 라우터로 만들어주면 안됨 미들웨어로 만들어서 게시글 자체의 post메소드를 꾸며주어야함

//이것은  multer로  따로 함수를 만들어놓는다
//미들웨어로써 역할을 할 함수를 만들어주어야 된다

router.get('/:id', async (req, res, next) => {
  try {
    const Post = await db.Post.findOne({
      where: { id: parseInt(req.params.id) },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname', 'email', 'student_id', 'createdAt']
        },
        {
          model: db.Category,
          attributes: ['name']
        },
        {
          model: db.Board,
          attributes: ['name']
        }
      ],
      attributes: [
        'id',
        'title',
        'description',
        'lock',
        'visit',
        'anonymous',
        'createdAt',
        'updatedAt'
      ]
    });
    return res.json(Post);
  } catch (e) {
    console.error(e);
    return next(e);
  }
}); //특정 글 가져오기

router.delete('/:id', (req, res) => {}); //글 삭제 + 로그인 구현 미들웨어 붙여줄것

router.get('/:id/comments', (req, res) => {}); //특정 글에 달린 모든댓글 가져오기
router.post('/:id/comments', (req, res) => {}); //특정 글에 댓글 추가하기
router.patch('/:id/comments', (req, res) => {}); //특정 댓글 수정
router.post('/:id/like', (req, res) => {}); //좋아요
router.delete('/:id/like', (req, res) => {}); //좋아요취소

module.exports = router;
