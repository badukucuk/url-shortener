const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    fullUrl: {type:String, required:true},
    shortUrl: {type:String, required:true, unique:true},
    createdAt: {type:Date, default:Date.now, expires:2592000}
});

module.exports = mongoose.model('Url', urlSchema);