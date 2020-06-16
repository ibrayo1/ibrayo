const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = new mongoose.model('project', ProjectSchema);

module.exports = Product;