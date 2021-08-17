import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

const routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" component={Projects}/>
            </Switch>
        </BrowserRouter>
    );
};

export default routes;