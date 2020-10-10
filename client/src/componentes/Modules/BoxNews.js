import React, {useState} from 'react';
import Moment from 'moment';
import {Col} from 'react-flexbox-grid';

const BoxNews = (props) => {
    const {data} = props;

    return (
        <Col xs={12} sm={6} md={4} lg={4} className="col-news">
            <a className="box-news" href={data.url} target="_blank">
                <img className="news-img"
                     src={(data.urlToImage) ? data.urlToImage : process.env.PUBLIC_URL + '/no-image-512.png'}></img>
                <div className="clear-fix"></div>
                <div className="date-news">{Moment(data.publishedAt).format('DD/MM/YYYY hh:mm')}</div>
                <div className="clear-fix"></div>
                <h2 className="title-news">{data.title}</h2>
                <div className="clear-fix"></div>
                <div className="description-news">{data.description}</div>
                <div className="clear-fix"></div>
                {(data.author) && <div className="author-news">Author: {data.author}</div>}
                <div className="clear-fix"></div>
            </a>
        </Col>
    );
};

export default BoxNews;
