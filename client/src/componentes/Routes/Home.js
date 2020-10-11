import React, {useEffect, useState} from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid';
import {ServerApi} from '../../utils';
import Header from '../Modules/Header';
import Loading from '../Modules/Loading';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ReactCountryFlag from 'react-country-flag';
import BoxNews from '../Modules/BoxNews';
import Footer from '../Modules/Footer';

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
            if (choose_countries.length > 0) {
                await setState({...state, isLoading: true});
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
            } else {
                await setState({...state, news: []});
            }
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
                    await setState({...state, isLoading: false, message: '', countries: resp.data.data});
                } else {
                    await setState({...state, isLoading: false, message: resp.msg, countries: []});
                    console.log(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({...state, isLoading: false, message: msg, countries: []});
                console.log(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, countries: []});
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

            <div className="content-site">

                {(isLoading) && <Loading/>}

                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
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
                                        <ReactCountryFlag title={countries[i].country_name}
                                                          className="country-flag-check"
                                                          countryCode={countries[i].country_code}
                                                          svg/>
                                    }
                                    title={countries[i].country_name}
                                />
                            ))}
                        </Col>
                    </Row>
                </Grid>
                <div className="clear-fix"></div>

                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <hr></hr>
                        </Col>
                    </Row>
                </Grid>

                {(news.length > 0) &&
                <Grid fluid>
                    <Row className="row-news">
                        {Object.keys(news).map(i => (
                            <BoxNews data={news[i]} key={i}/>
                        ))}
                    </Row>
                </Grid>
                }

                {(news.length <= 0 && choose_countries.length <= 0) &&
                <div>
                    <h3>Please Choose at least one country to see the last Headlines</h3>
                </div>
                }

            </div>

            <Footer/>

        </div>
    )
};

export default Home;