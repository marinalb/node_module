const express = require('express');
const router = express.Router();

router.get('/', (_,res) => {
    res.render('order/index', {
            userName: "Marina B", 
    });
});

module.exports = router;