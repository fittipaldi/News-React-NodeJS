import React from 'react'
import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export class ServerApi extends React.Component {

    static getServerHost() {
        return API_HOST;
    }

    static getToken() {
        return API_TOKEN;
    }

    static async getCountry() {
        const list = await axios({
            method: 'get',
            url: this.getServerHost() + '/country/all',
            headers: {
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
        return list;
    }

    static async getCountryNews(code) {
        const list = await axios({
            method: 'get',
            url: this.getServerHost() + '/news/country/' + code,
            headers: {
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
        return list;
    }

}