const express = require('express')
const router = express.Router()
const { handleStripeEvents } = require('../controllers/order.controller.js')

router.use('/webhook', express.raw({ type: 'application/json' }));
router.post('/webhook', handleStripeEvents);

module.exports = router