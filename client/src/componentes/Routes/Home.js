import React, {useEffect, useState} from 'react';
import {ServerApi} from '../../utils';
import ReactCountryFlag from 'react-country-flag';

const Home = (props) => {

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
        handleLoadCountries();
    }, []);

    return (
        <div className="App">
            <div className="list-team">
                {Object.keys(items).map(i => (
                    <div className="box-team" key={i}>
                        <div className="team-flag-icon">
                            <ReactCountryFlag countryCode={items[i].country_code} svg style={{
                                width: '50px',
                                height: '40px',
                            }}/>
                        </div>
                        <div className="team-name">
                            <a href={'/news/' + items[i].country_code}>{items[i].country_name}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home;