const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./item');

const shopSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    info: String,
    items: itemSchema
}, {
    timestamps: true
});

module.exports = mongoose.model('Shop', shopSchema);