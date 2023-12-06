const router = require('express').Router();
const { makeOrder, getAllOrders } = require('../controllers/order.controller.js');
const { verifyToken, verifyTokenAndUser } = require('../middleware/verifyToken.js');

router.post('/', verifyToken, makeOrder);
router.get('/:userId', verifyTokenAndUser, getAllOrders)
module.exports = router