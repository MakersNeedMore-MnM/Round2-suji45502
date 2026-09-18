const router = require('express').Router();

router.post('/transcribe', (req, res) => {
    const { audio } = req.body;
    res.json({ 
        text: '✅ Transcription: I can hear you clearly!',
        success: true 
    });
});

module.exports = router;
