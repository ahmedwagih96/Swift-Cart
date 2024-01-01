const router = require('express').Router();
const { makeOrder, getAllOrders } = require('../controllers/order.controller.js');

const { VerifyTokenMiddleware, VerifyTokenAndUserMiddleware } = require('../middleware')
router.post('/', VerifyTokenMiddleware, makeOrder);
router.get('/:userId', VerifyTokenAndUserMiddleware, getAllOrders)
module.exports = router