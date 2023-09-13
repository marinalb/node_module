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

Profile.collection.deleteOne({ name: 'Mary Jane', age: 21 });
Profile.collection.insertOne({ name: 'Mary Jane', age: 21 });

module.exports = router;