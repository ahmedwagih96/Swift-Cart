const router = require('express').Router();
const { makeOrder } = require('../controllers/order.controller.js')

router.post('/', makeOrder);

module.exports = router