import React, {useState} from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <a href="/" title="Go to Home">
                <img className="header-logo" src={process.env.PUBLIC_URL + '/bbc-white.svg'}></img>
            </a>

            <a className="menu-item" href="/countries">By Country</a>
        </div>
    );
};

export default Header;
