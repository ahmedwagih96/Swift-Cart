const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Item } = require('../models/item.model.js');
const { Order } = require("../models/order.model.js");
/**-----------------------------------------------------
    * @desc Make Payment
    * @route /api/api/order
    * @method POST
    * @access public
-----------------------------------------------------*/
const makeOrder = async (req, res) => {
    // retrieve item information 
    const items = await Promise.all(req.body.products.map(async ({ count, _id }) => {
        const item = await Item.findById(_id);
        if (!item) {
            return res.status(404).json({ message: `Item with ID:${_id} was not found` })
        }
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: count,
        };
    }));
    const products = req.body.products.map(({ _id, count }) => {
        return {
            count: Number(count),
            item: _id
        }
    })
    // create a stripe session
    const session = await stripe.checkout.sessions.create({
        customer_email: req.body.email,
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: items,
        success_url: `${process.env.CLIENT_DOMAIN}/checkout/success`,
        cancel_url: `${process.env.CLIENT_DOMAIN}/checkout/failure`
    }).catch(() => {
        return res.status(400).json({ message: 'There was a problem making your payment' })
    })
    await Order.create({
        products, stripeSessionId: session.id, user: req.user.id

    })
    return res.status(200).json({ id: session.id });

}

module.exports = { makeOrder }