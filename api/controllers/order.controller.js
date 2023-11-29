const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Item } = require('../models/item.model.js')

const makeOrder = async (req, res) => {
    console.log(req.body)
    try {
        // retrieve item information 
        const items = await Promise.all(req.body.products.map(async ({ count, _id }) => {
            const item = await Item.findById(_id);
            if (!item) {
                throw new Error(`Item with ID ${_id} not found`);
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
        console.log(items)
        // create a stripe session
        const session = await stripe.checkout.sessions.create({
            customer_email: req.body.email,
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: items,
            success_url: `${process.env.BASE_URL}/checkout/success`,
            cancel_url: process.env.BASE_URL
        })
        res.status(200).json({ id: session.id })
    } catch {
        res.status(500).json({ message: 'There was a problem making your payment' })
    }
}

module.exports = { makeOrder }