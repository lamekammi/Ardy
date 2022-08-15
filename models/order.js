const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./item');

const cartItemSchema = new Schema({
    qty: { 
        type: Number,
        default: 1
    },
    item: itemSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

const orderSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartItems: [cartItemSchema],
    isPaid: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})


// need an order total amount
orderSchema.virtual('orderTotal').get(function () {
    return this.cartItems.reduce(
        (total, cartItems) => total + cartItems.extPrice, 0);
});

// need a totalQty amount
orderSchema.virtual('totalQty').get(function () {
    return this.cartItems.reduce((total, cartItems) => total + cartItems.qty, 0);
});

// needs an order id
orderSchema.virtual('orderID').get(function () {
    return this.id.slice(-5).toUpperCase();
});

// need to add total of the items
cartItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.item.price;
});

// need to add item to the cart
orderSchema.methods.addItemToCart = async function (orderItem) {
    const cart = this;
    const cartItem = cart.cartItems.find(cartItem => {
        return cartItem.item._id.equals(orderItem.itemId)
    });
    if (cartItem) {
        cartItem.qty = parseInt(cartItem.qty) + parseInt(orderItem.itemQty);
    } else {
        const item = await mongoose.model('Item').findById(orderItem.itemId);
        item.qty = orderItem.itemQty
        cart.cartItems.push({ item });
    };
}

// need to get the cart
orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true}
    );
};

//update cart
orderSchema.methods.updateCartItem = async function(orderItem) {
    const cart = this;
    const cartItem = cart.cartItems.find(cartItem => cartItem._id.equals(orderItem.itemId));
    if (cartItem && orderItem.itemQty <= 0) {
        cartItem.remove()
    }
    else if (cartItem) {
        cartItem.qty = parseInt(orderItem.itemQty);
    } else {
        console.log(cartItem)
    }
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);