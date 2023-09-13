const { Schema } = require('mongoose');

const Order = new Schema({
        client: {
            name: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            }
        },
       pizzas: [
        {
        flavor: {
            type: String,
            required: true,
           },
           itens: {
            type: Number,
            require: true,
           },
           size: {
            type: String,
            required: true,
            enum: ['Small','Medium','Grande',],
           }     
        }
    ],
    methodPayment: {
        type: String,
        required: true,
        enum: ['Pix','Card']
    },
    total: {
        type: Number,
        required: true,
    },
    paid: {
        type: Boolean,
        default: false,
    }
});

module.exports = Order;