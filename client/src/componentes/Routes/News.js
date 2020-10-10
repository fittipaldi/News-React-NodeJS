import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ServerApi} from '../../utils';
import {Grid, Row} from 'react-flexbox-grid';
import BoxNews from '../Modules/BoxNews';
import Header from '../Modules/Header';
import Loading from '../Modules/Loading';
import NotFound from './NotFound';

const News = (props) => {

    const {code} = useParams();

    const [state, setState] = useState({
        items: [],
        isLoading: false,
        isNotFound: false,
        message: '',
        country_code: '',
        country_name: '',
    });

    const {items, isLoading, isNotFound, message, country_code, country_name} = state;

    const handleLoadNews = async (code) => {
        try {
            await setState({...state, isLoading: true, country_code: code, items: [], country_name: ''});
            ServerApi.getCountryNews(code).then(async (resp) => {
                if (resp.data.status) {
                    await setState({
                        ...state,
                        isLoading: false,
                        message: '',
                        items: resp.data.data.items,
                        country_code: resp.data.data.country.country_code,
                        country_name: resp.data.data.country.country_name,
                    });
                } else {
                    await setState({
                        ...state,
                        isLoading: false,
                        message: resp.msg,
                        items: [],
                        country_name: '',
                        isNotFound: true
                    });
                    console.log(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({
                    ...state,
                    isLoading: false,
                    message: msg,
                    items: [],
                    country_name: '',
                    isNotFound: true
                });
                console.log(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, items: [], country_name: '', isNotFound: true});
            console.log(msg);
        }
    };

    useEffect(() => {
        handleLoadNews(code);
    }, []);

    return (
        <div className="App">

            {(!isNotFound) ?
                <div>
                    <Header/>

                    {(isLoading) && <Loading/>}

                    <h1>{(country_name) && `${country_name}'s Headlines`}</h1>

                    <Grid fluid>
                        <Row className="row-news">
                            {Object.keys(items).map(i => (
                                <BoxNews data={items[i]} key={i}/>
                            ))}
                        </Row>
                    </Grid>
                </div>
                :
                <NotFound/>
            }

        </div>
    )
};

export default News;