const router = require('express').Router();
const { getAllItems, getItemById, createItem } = require('../controllers/item.controller.js');
const { photoUpload } = require('../middleware/mediaHandling.js');
const { validateId } = require('../middleware/validateObjectId.js')


router.route('/').get(getAllItems).post(photoUpload.single("image"), createItem);
router.get('/:id', validateId, getItemById);

module.exports = router