const mongoose = require('mongoose');

const candleSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('candle', candleSchema);
