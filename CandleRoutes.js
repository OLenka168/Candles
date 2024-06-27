const { Router } = require('express');
const { getCandle, saveCandle } = require('./CandleController');

const router = Router();

router.get('/', getCandle);
router.post('/saveCandle', saveCandle)

module.exports = router;