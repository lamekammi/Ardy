const Order = require('../models/order');
const Item = require('../models/item');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    forUser,
};

// a cart function
async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
};

// a add to cart function
async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart);
};

//update an items qty in the cart
async function setItemQtyInCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.setItemQty(req.body.itemId, req.body.newQty);
    res.json(cart);
};

// a checkout function
async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
};

// get orders for the logged in user
async function forUser(req, res) {
    const orders = await Oder.find({ user: req.user._id, isPaid: true }).sort('-updatedAt');
    res.json(orders);
}