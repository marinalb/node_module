const express = require('express');

const { Profile } = require ('../models');
const router = express.Router();

router.get('/', (_,res) => {
    Profile.find({}).then((profiles) => {
        res.render('profile/index', {
            profiles: profiles,
        });
    });
});

Profile.collection.insertOne({ name: 'Mary Jane', age: 45 });

module.exports = router;