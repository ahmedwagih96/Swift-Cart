const router = require('express').Router();
const { makeOrder } = require('../controllers/order.controller.js');
const { verifyToken } = require('../middleware/verifyToken.js');

router.post('/', verifyToken, makeOrder);

module.exports = router