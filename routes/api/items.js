const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items');

router.get('/items/index', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/items/:id', itemsCtrl.show);
router.post('/index', itemsCtrl.create);
router.delete('/items/:id', itemsCtrl.delete);
router.get('/items/:id/edit', itemsCtrl.edit);
router.put('/items/:id', itemsCtrl.update);



