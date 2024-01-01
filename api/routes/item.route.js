const router = require('express').Router();
const { getAllItems, getItemById, createItem } = require('../controllers/item.controller.js');
const { ValidateObjectIdMiddleware, MediaHandlerMiddleware } = require('../middleware')

router.route('/').get(getAllItems).post(MediaHandlerMiddleware.single("image"), createItem);
router.get('/:id', ValidateObjectIdMiddleware, getItemById);

module.exports = router