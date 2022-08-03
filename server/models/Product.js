const { Schema, model } = require('mongoose');
dateFormat = require('../utils/dateFormat.js');

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: 'You need a product name!',
            minlength: 1,
            maxlength: 60
        },
        sizeCategory: {
            type: String,
            required: 'You need a size category!',
            minlength: 1,
            maxlength: 12
        },
        price: {
            type: Number,
            required: 'You need a price!',
            minlength: 1,
            maxlength: 12
        }
        // Add image path field here (String)
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Product = model('Product', productSchema);

module.exports = Product;