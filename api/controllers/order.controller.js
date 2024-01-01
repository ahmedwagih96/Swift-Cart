const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { NotFoundError, BadRequestError } = require("../errors");
const { Item } = require('../models/item.model.js');
const { Order } = require("../models/order.model.js");
const { OrderToken } = require("../models/orderToken.model.js")
const crypto = require('crypto');
/**-----------------------------------------------------
    * @desc Make Payment
    * @route /api/api/order
    * @method POST
    * @access private (only logged in users)
-----------------------------------------------------*/
const makeOrder = async (req, res) => {
    // retrieve item information 
    const items = await Promise.all(req.body.products.map(async ({ count, _id }) => {
        const item = await Item.findById(_id);
        if (!item) {
            throw new NotFoundError(`Item with ID:${_id} was not found`)
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

    // Create Order Token 
    const orderToken = new OrderToken({
        user: req.user.userId,
        token: crypto.randomBytes(32).toString("hex")
    })

    await orderToken.save()

    // create a stripe session
    const session = await stripe.checkout.sessions.create({
        customer_email: req.body.email,
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: items,
        success_url: `${process.env.CLIENT_DOMAIN}/checkout/fulfilled/${orderToken.token}`,
        cancel_url: `${process.env.CLIENT_DOMAIN}/checkout/declined/${orderToken.token}`
    }).catch(() => {
        throw new BadRequestError('There was a problem making your payment')
    })
    await Order.create({
        products, stripeSessionId: session.id, user: req.user.userId, status: 'pending', totalPrice: req.body.totalPrice
    })
    return res.status(200).json({ id: session.id });
}


/**-----------------------------------------------------
    * @desc Make Payment
    * @route /api/api/stripe/webhook
    * @method POST
    * @access private
-----------------------------------------------------*/
const handleStripeEvents = async (request, response) => {
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_ENDPOINT_SECRET);
    } catch (err) {
        throw new BadRequestError(`Webhook Error: ${err.message}`)
    }
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const completedSession = event.data.object;
            await Order.findOneAndUpdate(
                { stripeSessionId: completedSession.id },
                { status: 'fulfilled' },
                { new: true }
            );
            break;

        case 'checkout.session.payment_failed':
            const failedSession = event.data.object;
            await Order.findOneAndUpdate(
                { stripeSessionId: failedSession.id },
                { status: 'cancelled' },
                { new: true }
            );
            break;

        default:
            response.status(400).end();
            return;
    }
    response.status(200).end();
}
/**-----------------------------------------------------
    * @desc Get All Orders
    * @route /api/api/orders
    * @method GET
    * @access private (only logged in user)
-----------------------------------------------------*/
const getAllOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.userId }).populate({
        path: 'products.item',
        model: 'Item',
    });
    return res.status(200).json(orders)
}


module.exports = { makeOrder, handleStripeEvents, getAllOrders }