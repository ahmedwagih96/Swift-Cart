const router = require('express').Router();
const { verifyOrderToken } = require('../controllers/orderToken.controller.js');
const { verifyToken } = require('../middleware/verifyToken.js');

router.get('/:orderToken', verifyToken, verifyOrderToken);

module.exports = router