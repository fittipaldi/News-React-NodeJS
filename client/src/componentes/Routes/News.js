import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ServerApi} from "../../utils";
import Moment from 'moment';

const News = (props) => {

    const {code} = useParams();

    const [state, setState] = useState({
        items: [],
        isLoading: false,
        message: '',
        country_code: ''
    });

    const {items, isLoading, message, country_code} = state;

    const handleLoadNews = async (code) => {
        try {
            await setState({...state, isLoading: true, country_code: code, items: []});
            ServerApi.getCountryNews(code).then(async (resp) => {
                if (resp.data.status) {
                    await setState({...state, isLoading: false, message: '', items: resp.data.data});
                } else {
                    await setState({...state, isLoading: false, message: resp.msg, items: []});
                    alert(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({...state, isLoading: false, message: msg, items: []});
                alert(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, items: []});
            alert(msg);
        }
    };

    useEffect(() => {
        handleLoadNews(code);
    }, []);

    return (
        <div className="App">

            {Object.keys(items).map(i => (
                <div className="box-team" key={i}>
                    <div className="team-flag-icon">
                        <img src={items[i].urlToImage} style={{
                            width: '100px'
                        }}></img>
                    </div>
                    <div className="team-name">
                        <a href={items[i].url}>{items[i].title}</a>
                    </div>

                    {(items[i].author) && <div>By {items[i].author}</div>}
                    <div>{items[i].description}</div>
                    <div>{Moment(items[i].publishedAt).format('DD/MM/YYYY hh:mm')}</div>
                </div>
            ))}

        </div>
    )
};

export default News;