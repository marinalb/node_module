const express = require('express');
const router = express.Router();

router.get('/', (_,res) => {
    res.render('profile/index', {
            userName: "Marina B",
            age: 32,
    });
});

module.exports = router;