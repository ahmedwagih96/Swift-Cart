const { NotFoundError, BadRequestError } = require('../errors');
const { Item, validateCreateItem } = require('../models/item.model.js')
const { cloudinaryUploadImage } = require('../utils/cloudinary');
/**-----------------------------------------------------
    * @desc Get All Items
    * @route /api/api/items
    * @method GET
    * @access public
-----------------------------------------------------*/
const getAllItems = async (req, res) => {
    const queries = {}
    if (req.query.category) {
        queries.category = req.query.category
    }
    const items = await Item.find(queries)
    return res.status(200).json(items)
}

/**-----------------------------------------------------
    * @desc Get Item By Id
    * @route /api/api/items/:id
    * @method GET
    * @access public
-----------------------------------------------------*/

const getItemById = async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) {
        throw new NotFoundError('Item Not Found')
    }
    return res.status(200).json(item)
}
/**-----------------------------------------------------
    * @desc Create New Item
    * @route /api/api/items/:id
    * @method POST
    * @access public
-----------------------------------------------------*/

const createItem = async (req, res) => {
    // Validation
    if (!req.file) {
        new BadRequestError("no image is provided")
    }
    const { error } = validateCreateItem(req.body);
    if (error) {
        new BadRequestError(error.details[0].message)
    }

    // Upload Photo
    const result = await cloudinaryUploadImage(req.file.path);

    await Item.create({
        ...req.body,
        image: result.secure_url
    })

    // Send Response to the client
    return res.status(201).json({ message: 'New Item Created' });


}

module.exports = { getAllItems, getItemById, createItem }