import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './componentes/Routes/Home';
import News from './componentes/Routes/News';
import NotFound from './componentes/Routes/NotFound';

function App(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/news/:code" component={News}/>

                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
