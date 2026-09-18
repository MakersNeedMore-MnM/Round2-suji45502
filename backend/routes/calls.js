const router = require('express').Router();

router.post('/initiate', (req, res) => {
    const { toNumber, fromNumber, mode } = req.body;
    res.json({
        callSid: 'TEST_CALL_' + Date.now(),
        status: 'initiated',
        to: toNumber || 'Not provided',
        mode: mode || 'combined',
        success: true
    });
});

router.post('/send-text', (req, res) => {
    const { text } = req.body;
    res.json({
        success: true,
        text: text,
        sent: true,
        timestamp: new Date().toISOString()
    });
});

module.exports = router;
