import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { EmployeeData }  from '../EmployeeData';
import EmployeeFullDetails from './employeeFullDetails';
import Button from './common/button'

class EmployeeListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            showFullDetails: null
        }
    }

    handleEmployeeFullDetails = (data) => {
        this.setState({
            showFullDetails: data
        })
    }

    handleEmployeeDelete = (id) => {
        // handleDelete
    }

    renderEmployeeAdd = () => {
        // return <button className={`employeeAdd`} onClick={this.handleEmployeeAdd}> Add Employee </button>
        return <Link to={'/addEmployee'} className={`btn btn-primary addEmployee`}> Add Employee </Link>
    }

    handleEmployeeAdd = () => {
        // show popup to handle employee Creation
    }

    renderEmployeeList = () => {
        let employeeList = []
        EmployeeData.map(employee => {
            employeeList.push(
                <employee className={`employee`}>
                    <Button classes={`btn btn-danger cancelButton`} title={"X"} onClick={ () => this.handleEmployeeDelete(employee.id)}/>
                    <div className={`row`} onClick={ () => this.handleEmployeeFullDetails(employee)}>
                        <div className={`col-4`}>
                            <img src={"employee.jpg"} alt="Profile" className={`employeePicture`} width="100" height="100" />
                        </div>
                        <div className={`col-8`}>
                            <div>{`${employee.firstName} ${employee.lastName}`}  </div>
                            <div>{`${employee.designation}`}  </div>
                            <div>{`${employee.experience}`}  </div>
                            <div>{`${employee.dob}`}  </div>
                        </div>
                    </div>
                </employee>
            )
        })

        return employeeList;
    }

    render(){
        const  { showFullDetails } = this.state;
        
        return (
            <div className={`employeeDetails`}>
                {this.renderEmployeeAdd()}
                <div className="employeeList">
                    {this.renderEmployeeList()}
                    {/* <div className={`col-7`}> */}
                    {/* </div> */}
                    {/* <div className={`col-5`}> */}
                        {showFullDetails &&  <EmployeeFullDetails />}
                    {/* </div> */}
                </div>
            </div>
            
        )
    }

}

export default EmployeeListing;