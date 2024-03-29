const router = require('express').Router();
const NewsController = require('../lib/controllers/News');
const Country = require('../lib/models').Country;
const passport = require('passport');
const bearerAuth = passport.authenticate('bearer', {session: false});

router.get('/country/:code', bearerAuth, async (req, res) => {
    let status_code = 500;
    try {
        const code = req.params.code;
        const country = await Country.findOne({
            where: {
                country_code: code
            }
        });

        if (!country) {
            status_code = 404;
            throw 'Country not fount';
        }

        const items = await NewsController.getNewsByCountry(code);
        return res.json({
            status: true,
            msg: 'Success',
            data: {
                country,
                items
            }
        });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(status_code).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

router.get('/country/:code/:limit', bearerAuth, async (req, res) => {
    let status_code = 500;
    try {
        const code = req.params.code;

        const country = await Country.findOne({
            where: {
                country_code: code
            }
        });

        if (!country) {
            status_code = 404;
            throw 'Country not fount';
        }

        const limit = parseInt(req.params.limit.replace(/\D/g, ''));
        const items = await NewsController.getNewsByCountry(code, limit);
        return res.json({
            status: true,
            msg: 'Success',
            data: {
                country,
                items
            }
        });
    } catch (err) {
        const msg = (typeof err.message != 'undefined') ? err.message : err;
        return res.status(status_code).json({
            status: false,
            msg: msg,
            data: null
        });
    }
});

router.get('/countries/:codes', bearerAuth, async (req, res) => {
    try {
        const codes = req.params.codes;
        const items = await NewsController.getNewsByCountries(codes);
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