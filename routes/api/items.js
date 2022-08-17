const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/items');

router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/items/:id', itemsCtrl.show);
router.post('/create', itemsCtrl.create);
router.delete('/items/:id', itemsCtrl.delete);
router.get('/:id/edit', itemsCtrl.edit);
router.put('/', itemsCtrl.update);

module.exports = router;


