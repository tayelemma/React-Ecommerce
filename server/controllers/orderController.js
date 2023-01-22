const Order = require("../Models/OrderModel");
const { ObjectId } = require("mongodb");


module.exports.getAllOrders = async (req, res, next) => {
    try {
        const result = await Order.find({});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports.getUserLoginOrders = async (req, res, next) => {
    try {
        const result = await Order.find({ user: req.user._id }).sort({ _id: -1 });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports.getOrderById = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const result = await Order.findById(orderId).populate(
            "user",
            "name email"
        );
        if (result) {
            res.json(result);
        } else {
            res.status(404);
            throw new Error("Order Not Found");
        }

    } catch (error) {
        next(error);
    }
}
module.exports.createOrders = async (req, res, next) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        } = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error("No order items");
            return;
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            })
            const result = await order.save();
            res.status(201).json(result);

        }
    } catch (error) {
        next(error);
    }
}

