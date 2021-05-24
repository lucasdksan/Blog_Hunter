import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Opinions from './pages/Opinions';
import Projects from './pages/Projects';
import Specialization from './pages/Specialization';

const routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/opinions" component={Opinions}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/specialization" component={Specialization}/>
            </Switch>
        </BrowserRouter>
    );
};

export default routes;