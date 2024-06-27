const CandleModel = require('./CandleModel');



module.exports.getCandle = async (req, res) => {
    const myCandle = await CandleModel.find();
    res.send(myCandle);
}

module.exports.saveCandle = async (req, res) => {
    const { name } = req.body;
    CandleModel.create({ name })
    .then((data) => { console.log('Candle added')
        res.send(data)
 })
}