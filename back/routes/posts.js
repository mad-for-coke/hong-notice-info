const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./loginmiddleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  //   initialize essential elements in all table
  //   await db.SubParent.findOrCreate({
  //     where: { name: '학과공지' }
  //   });
  //   await db.SubParent.findOrCreate({
  //     where: { name: '교내공지' }
  //   });
  //   await db.SubParent.findOrCreate({
  //     where: { name: '클래스넷 공지' }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '학과(학과)', SubParentId: 1 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '취업인턴', SubParentId: 1 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '수업/프로젝트', SubParentId: 1 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: 'SCSC', SubParentId: 1 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '장학금', SubParentId: 1 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '코로나19', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '일반공지', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '학생공지', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '교강사공지', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '대학원공지', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '행사/공모전', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '보안공지', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '입찰공고', SubParentId: 2 }
  //   });
  //   await db.SubChild.findOrCreate({
  //     where: { name: '공지사항', SubParentId: 3 }
  //   });
  //   await db.Board.findOrCreate({
  //     where: { name: '질문' }
  //   });
  //   await db.Board.findOrCreate({
  //     where: { name: '정보' }
  //   });
  //   await db.Category.findOrCreate({
  //     where: { name: '웹' }
  //   });
  //   await db.Category.findOrCreate({
  //     where: { name: '앱' }
  //   });
  //   await db.Category.findOrCreate({
  //     where: { name: '알고리즘' }
  //   });
  //   await db.Category.findOrCreate({
  //     where: { name: '테이터 사이언스' }
  //   });
  //   await db.Category.findOrCreate({
  //     where: { name: '임베디드' }
  //   });

  const notice = await db.SubParent.findAll({
    include: [
      {
        model: db.SubChild,
        as: ['id'],
        attributes: ['id', 'name']
      }
    ],
    attributes: ['id', 'name']
  });
  const board = await db.Category.findAll({
    attributes: ['id', 'name'],
    raw: true
  });
  const Board_table = await db.Board.findAll({
    attributes: ['id', 'name'],
    raw: true
  });
  board.map(x => {
    x.sub = Board_table;
  });
  const entire = { notice: notice, board: board };
  return res.json(entire);
});

router.get('/notice', (req, res) => {}); //공지 페이지로 가기
router.get('/notice/:id', (req, res) => {}); //공지페이지 에서 세부항목보기
//id could be  1.학교공지 2.컴공과공지 3.클넷공지
router.get('/board', (req, res) => {}); //게시판 들어가면 글 불러오기
// router.get('/board/:category_id/:board_id', (req, res) => {}); //게시판 특정 카테고리 특정 보드 선택시 글 불러오기

module.exports = router;
