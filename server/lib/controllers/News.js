const NewsAPI = require('newsapi');
const newsApi = new NewsAPI(process.env.NEWS_API_KEY || '');

const NewsController = {

    getNewsByCountry: async (code, limit = 5) => {

        const news = await newsApi.v2.topHeadlines({
            country: code.toLowerCase(),
        });

        const limitedNews = [];

        if (news) {
            if (news.status === 'ok') {
                let loop = 1;
                for (let article of news.articles) {
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

};

module.exports = NewsController;