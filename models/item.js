const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: Number,
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);