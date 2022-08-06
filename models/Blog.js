const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BlogSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('blog', BlogSchema)