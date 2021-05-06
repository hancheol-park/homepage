const express = require('express');
const router = express.Router();
const auth = require('../auth');
const Board = require('../models').Board;
const { Op } = require('sequelize');

/* BOARD */
router.post('/', auth.ensureAuth(), async function(req, res, next) {
  const userId = req.user.id
  const { title, content, name, count } = req.body

  const board = Board.build({ title, content, name, count, userId })
  await board.save()
  
  res.status(201).json({ item: board })
});

router.get('/', async function(req, res, next) {
  const boardList = await Board.findAll({
    attributes:['id','title','content','name','count','createdAt','updatedAt']
  })
  res.json({ itemList: boardList })
});

router.get('/view/:id', async function(req, res, next) {
  const { id } = req.params
  const board = await Board.findOne({
    attributes:['id','title','content','name','count','createdAt','updatedAt'],
    where: { id }
  })
  res.json({ item: board })
});

router.put('/view/:id', async function(req, res, next) {
  const { id } = req.params
  let body = req.body

  let board = await Board.findOne({ where: { id } })

  if (!board) return res.status(404).end()

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'integer') value = value.trim()

    if (!value) return
    board[key] = value
  })

  await board.save()

  res.json({ item: board })
});

router.delete('/view/:id', async function(req, res, next) {
  const { id } = req.params
  const board = await Board.destroy({ where: { id } })
  res.status(204).end()
});

module.exports = router;
