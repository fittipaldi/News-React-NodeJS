require('dotenv').config();
let request = require('supertest');
const urlAPI = 'localhost:' + process.env.PORT;
request = request(urlAPI);
const API_TOKEN = 'JhRpgUjeShbs2M65XfbyUUeZH9MkDkLY';

describe('News API Test', () => {

    it('Getting headlines US', (done) => {
        request.get('/news/country/fr')
            .set('Authorization', 'Bearer ' + API_TOKEN)
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    return done(err);
                }
                if (!res.body.status) {
                    return done(err);
                }
                done();
            })
    });

    it('Getting All Countries Actives', (done) => {
        request.get('/country/all')
            .set('Authorization', 'Bearer ' + API_TOKEN)
            .expect(200)
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    return done(err);
                }
                if (!res.body.status) {
                    return done(err);
                }
                done();
            })
    });

});
