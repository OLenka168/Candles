const CandleModel = require('./CandleModel');



module.exports.getCandle = async (req, res) => {
    const myCandle = await CandleModel.find();
    res.send(myCandle);
}

module.exports.saveCandle = async (req, res) => {
    const { img, name, price } = req.body;
    CandleModel.create({ img, name, price })
    .then((data) => { console.log('Candle added')
        res.send(data)
 })
}