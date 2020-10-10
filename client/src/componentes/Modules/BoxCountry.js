import React, {useState} from 'react';
import ReactCountryFlag from "react-country-flag";
import {Col} from "react-flexbox-grid";

const BoxCountry = (props) => {
    const {data} = props;

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <a className="box-country" href={'/news/' + data.country_code}>
                <ReactCountryFlag className="country-flag" countryCode={data.country_code} svg/>
                <div className="clear-fix"></div>
                <h2>{data.country_name}</h2>
            </a>
        </Col>
    );
};

export default BoxCountry;
