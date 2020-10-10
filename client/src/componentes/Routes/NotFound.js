import React from 'react';
import Header from '../Modules/Header';
import {Col, Grid, Row} from 'react-flexbox-grid';

const NotFound = (props) => {

    return (
        <div className="App">

            <Header/>

            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div>
                            <h1>404: Page Not Found</h1>
                        </div>
                    </Col>
                </Row>
            </Grid>

        </div>
    )
};

export default NotFound;