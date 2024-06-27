const mongoose = require('mongoose');

const candleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('candle', candleSchema);
