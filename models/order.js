const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./item');

const orderSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartItems: itemSchema,
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})


// need an order total amount
// need a totalQty amount
// needs an order id
// need to add total of the items
// need to add item to the cart
// need to get the cart


module.exports = mongoose.model('Order', orderSchema);