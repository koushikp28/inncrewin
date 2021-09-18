import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import bootstrap from 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EmployeeListing from './component/EmployeeListing';
import Home from './component/Home';

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/employees" component={EmployeeListing} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
