import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import EmployeeListing from './EmployeeListing'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/employees" component={EmployeeListing} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default NavBar;