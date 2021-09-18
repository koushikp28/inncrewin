import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main className={`home`}>
            <h1 className="employeePortal">Employee Portal</h1>
            <Link to={"/employees"} className={`btn btn-primary employeeDetailsBtn`}> Click Here for Employee Details </Link>
            </main>
        );
    }

}

export default Home;