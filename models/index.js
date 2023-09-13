const mongoose = require('mongoose');

const OrderSchema = require('./order');
const ProfileSchema = require('./profile');

const Order = mongoose.model('Order', OrderSchema) 
const Profile = mongoose.model('Profile', ProfileSchema) 

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/pizza')
};


module.exports = {
    connect,
    Order,
    Profile
}