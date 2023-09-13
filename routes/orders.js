const express = require('express');

const { Order } = require ('../models');
const router = express.Router();

router.get('/', (_,res) => {
    Order.find({}).then((orders) => {
        res.render('order/index', {
            orders: orders,
        });
    });
});

module.exports = router;