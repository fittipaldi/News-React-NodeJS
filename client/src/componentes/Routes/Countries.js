import React, {useEffect, useState} from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import {ServerApi} from '../../utils';
import BoxCountry from '../Modules/BoxCountry';
import Header from '../Modules/Header';
import Loading from '../Modules/Loading';
import Footer from '../Modules/Footer';

const Countries = (props) => {

    const [state, setState] = useState({
        items: [],
        isLoading: false,
        message: ''
    });

    const {items, isLoading, message} = state;

    const handleLoadCountries = async () => {
        try {
            await setState({...state, isLoading: true, items: []});
            ServerApi.getCountry().then(async (resp) => {
                if (resp.data.status) {
                    await setState({...state, isLoading: false, message: '', items: resp.data.data});
                } else {
                    await setState({...state, isLoading: false, message: resp.msg, items: []});
                    console.log(resp.msg);
                }
            }).catch(async (err) => {
                const msg = (typeof err.message != 'undefined') ? err.message : err;
                await setState({...state, isLoading: false, message: msg, items: []});
                console.log(msg);
            });
        } catch (err) {
            const msg = (typeof err.message != 'undefined') ? err.message : err;
            await setState({...state, isLoading: false, message: msg, items: []});
            console.log(msg);
        }
    };

    useEffect(() => {
        handleLoadCountries();
    }, []);

    return (
        <div className="App">

            <Header/>

            <div className="content-site">

                {(isLoading) && <Loading/>}

                <h1>Headlines by Country</h1>

                <Grid fluid>
                    <Row>
                        {Object.keys(items).map(i => (
                            <BoxCountry data={items[i]} key={i}/>
                        ))}
                    </Row>
                </Grid>
            </div>

            <Footer/>

        </div>
    )
};

export default Countries;