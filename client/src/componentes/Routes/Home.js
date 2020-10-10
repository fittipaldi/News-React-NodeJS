import React, {useEffect, useState} from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import {ServerApi} from '../../utils';
import BoxCountry from '../Modules/BoxCountry';
import Header from '../Modules/Header';
import Loading from '../Modules/Loading';


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ReactCountryFlag from "react-country-flag";
import BoxNews from "../Modules/BoxNews";

const Home = (props) => {

    const [state, setState] = useState({
        countries: [],
        news: [],
        isLoading: false,
        message: '',
        choose_countries: [],
    });

    const {countries, news, isLoading, message, choose_countries} = state;

    const handleLoadNewsCountries = async () => {
        try {
            await setState({...state, isLoading: true, news: []});
            ServerApi.getCountriesNews(choose_countries).then(async (resp) => {
                if (resp.data.status) {
                    await setState({
                        ...state,
                        isLoading: false,
                        message: '',
                        news: resp.data.data,
                    });
                } else {
                    await setState({
                        ...state,
                        isLoading: false,
                        message: resp.msg,
                        news: [],
                    });
                    console.log(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({...state, isLoading: false, message: msg, news: []});
                console.log(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, news: []});
            console.log(msg);
        }
    };

    const handleLoadCountries = async () => {
        try {
            await setState({...state, isLoading: true, countries: []});
            ServerApi.getCountry().then(async (resp) => {
                if (resp.data.status) {
                    const checks = [];
                    for (let country of resp.data.data) {
                        checks.push(country.country_code);
                    }
                    await setState({
                        ...state,
                        isLoading: false,
                        message: '',
                        countries: resp.data.data,
                        choose_countries: checks
                    });
                } else {
                    await setState({
                        ...state,
                        isLoading: false,
                        message: resp.msg,
                        countries: [],
                        choose_countries: []
                    });
                    console.log(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({...state, isLoading: false, message: msg, countries: [], choose_countries: []});
                console.log(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, countries: [], choose_countries: []});
            console.log(msg);
        }
    };

    const handleChooseCountries = async (e) => {
        if (e.target.checked) {
            choose_countries.push(e.target.value);
        } else {
            for (let k in choose_countries) {
                if (choose_countries[k] == e.target.value) {
                    choose_countries.splice(k, 1);
                }
            }
        }
        await setState({...state, choose_countries: choose_countries});
        handleLoadNewsCountries();
    };

    useEffect(() => {
        handleLoadCountries();
    }, []);

    return (
        <div className="App">

            <Header/>

            {(isLoading) && <Loading/>}

            <Grid fluid>
                <Row>
                    {Object.keys(countries).map(i => (
                        <FormControlLabel
                            key={i}
                            control={
                                <Checkbox
                                    checked={(choose_countries.includes(countries[i].country_code))}
                                    onChange={handleChooseCountries}
                                    name="countries"
                                    color="primary"
                                    value={countries[i].country_code}
                                />
                            }
                            label={
                                <ReactCountryFlag title={countries[i].country_name} className="country-flag-check"
                                                  countryCode={countries[i].country_code}
                                                  svg/>
                            }
                            title={countries[i].country_name}
                        />
                    ))}
                </Row>
            </Grid>
            <div className="clear-fix"></div>

            {(news.length > 0) &&
            <Grid fluid>
                <Row className="row-news">
                    {Object.keys(news).map(i => (
                        <BoxNews data={news[i]} key={i}/>
                    ))}
                </Row>
            </Grid>
            }

        </div>
    )
};

export default Home;