const NewsAPI = require('newsapi');
const newsApi = new NewsAPI(process.env.NEWS_API_KEY || '');

const NewsController = {

    getNewsByCountry: async (code, limit = 5) => {

        const news = await newsApi.v2.topHeadlines({
            country: code.toLowerCase(),
            language: 'en'
        });

        const limitedNews = [];

        if (news) {
            if (news.status === 'ok') {
                let loop = 1;
                for (let article of news.articles) {
                    article.countryCode = code;
                    limitedNews.push(article);
                    if (limit < ++loop) {
                        break;
                    }
                }
            } else if (typeof news.message !== 'undefined') {
                throw news.message;
            }
        }

        return limitedNews;
    },

    getNewsByCountries: async (codes) => {
        const codesArr = codes.toLowerCase().split(',');
        let news = [];
        for (let code of codesArr) {
            const newsC = await NewsController.getNewsByCountry(code, 5);
            if (newsC.length > 0) {
                news = news.concat(newsC);
            }
        }

        //Order by the newest
        news.sort((a, b) => {
            const dA = new Date(a.publishedAt);
            const dB = new Date(b.publishedAt);
            if (dA < dB) {
                return 1;
            }
            if (dA > dB) {
                return -1;
            }
            return 0;
        });

        return news;
    }

};

module.exports = NewsController;