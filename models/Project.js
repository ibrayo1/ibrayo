const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    stackname:{
        type: String,
        required: true
    },
    projdesc: {
        type: String,
        required: true
    },
    projgitlink: {
        type: String,
        default: "N/A"
    },
    projlivelink: {
        type: String,
        default: "N/A"
    },
    thumbnail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Product = new mongoose.model('Project', ProjectSchema);

module.exports = Product;