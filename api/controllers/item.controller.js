const fs = require("fs");
const path = require("path");
const { Item, validateCreateItem } = require('../models/item.model.js')
const { cloudinaryUploadImage } = require('../utils/cloudinary');
/**-----------------------------------------------------
    * @desc Get All Items
    * @route /api/api/items
    * @method GET
    * @access public
-----------------------------------------------------*/
const getAllItems = async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items)
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
        return res.status(404).json({ message: 'item not found' })
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
        return res.status(400).json({ message: "no image is provided" })
    }
    const { error } = validateCreateItem(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    // Upload Photo
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    const result = await cloudinaryUploadImage(imagePath);
    // Remove Image from the Server
    fs.unlinkSync(imagePath)

    await Item.create({
        ...req.body,
        image: result.secure_url
    })

    // Send Response to the client
    res.status(201).json({ message: 'New Item Created' });


}

module.exports = { getAllItems, getItemById, createItem }