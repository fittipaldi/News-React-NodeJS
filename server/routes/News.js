const router = require('express').Router();
const NewsController = require('../lib/controllers/News');
const passport = require('passport');
const bearerAuth = passport.authenticate('bearer', {session: false});

router.get('/country/:code', bearerAuth, async (req, res) => {
    try {
        const code = req.params.code;
        const items = await NewsController.getNewsByCountry(code);
        return res.json({
            status: true,
            msg: 'Success',
            data: items
        });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(500).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

router.get('/country/:code/:limit', bearerAuth, async (req, res) => {
    try {
        const code = req.params.code;
        const limit = parseInt(req.params.limit.replace(/\D/g, ''));
        const items = await NewsController.getNewsByCountry(code, limit);
        return res.json({
            status: true,
            msg: 'Success',
            data: items
        });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(500).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

module.exports = router;