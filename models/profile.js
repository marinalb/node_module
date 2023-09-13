const { Schema } = require('mongoose');

const Profile = new Schema({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        }
});

module.exports = Profile;