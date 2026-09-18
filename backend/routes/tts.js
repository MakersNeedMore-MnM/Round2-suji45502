const router = require('express').Router();

router.post('/synthesize', (req, res) => {
    const { text } = req.body;
    res.json({ 
        audio: 'mock-audio-data-base64',
        text: text || 'No text provided',
        success: true 
    });
});

module.exports = router;
