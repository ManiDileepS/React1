import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      "Employee": [
        {
          "Name": "Ravi",
          "EDid": 3,
          "Salary": "2500",
          "ECode": 1233
        }, {
          "Name": "Mani Sabbisetti",
          "EDid": 3,
          "Salary": "1500",
          "ECode": 1234
        }, {
          "Name": "Manjusha",
          "EDid": 3,
          "Salary": "1400",
          "ECode": 1235
        }, {
          "Name": "Hari",
          "EDid": 2,
          "Salary": "1550",
          "ECode": 1236
        }, {
          "Name": "Avinash",
          "EDid": 1,
          "Salary": "1450",
          "ECode": 1237
        }, {
          "Name": "Prachi",
          "EDid": 2,
          "Salary": "1600",
          "ECode": 1238
        }, {
          "Name": "Sandhya",
          "EDid": 3,
          "Salary": "1350",
          "ECode": 1239
        }],

      "Department": [
        {
          "Dname": "DevOps",
          "Did": 1,
        }, {
          "Dname": "Backend Devlopers",
          "Did": 2,
        }, {
          "Dname": "Frontend Devlopers",
          "Did": 3,

        }],

      "EmployeeData": [],

 
    }

    this.handleCheck = this.handleCheck.bind(this);
    
  }


  componentDidMount() {

  }

  componentWillUnmount() {

  }


  handleCheck(e) {
    if (e.target.value != 0) {
      let d = this.state.Department.filter(x => x.Did == e.target.value);
      let emp = this.state.Employee.filter(em => em.EDid == e.target.value);
      this.setState({
        "EmployeeData": [{
          "Name": d[0].Dname,
          "Id": d[0].Did,
          "HSalary": emp.reduce((max, p) => p.Salary > max ? p.Salary : max, emp[0].Salary),
          "LSalary": emp.reduce((min, p) => p.Salary < min ? p.Salary : min, emp[0].Salary)
        }]
      });
    }
    else {
      alert("Select a valid department..!");
      this.setState({
        "EmployeeData": []
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <div className="main_tables">
            <table id="emps">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Department Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Employee.map(obj => {
                  return (
                    <tr>
                      <td>{obj.ECode}</td>
                      <td>{obj.Name}</td>
                      <td>{obj.Salary}</td>
                      <td>{obj.EDid}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>

            <table id="emps" className="department">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Department.map(obj => {
                  return (
                    <tr>
                      <td>{obj.Did}</td>
                      <td>{obj.Dname}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>

          <div className="custom-select">
            <select onChange={(event) => this.handleCheck(event)}>
              <option value={0}>Select Department</option>
              {this.state.Department.map((d) => (
                <option key={d.Did} value={d.Did} >{d.Dname}
                </option>
              ))}</select>
          </div>

          <table id="employee">
            <thead>
              <tr>
                <th>Department Id</th>
                <th>Department Name</th>
                <th>Highest Salary</th>
                <th>Least Salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.EmployeeData.length ? this.state.EmployeeData.map(obj => {
                return (
                  <tr>
                    <td>{obj.Id}</td>
                    <td>{obj.Name}</td>
                    <td>{obj.HSalary}</td>
                    <td>{obj.LSalary}</td>
                  </tr>
                )
              }) :
                <tr >
                  <td colspan="4">No Data Found..!</td>

                </tr>
              }

            </tbody>
          </table>


        </header>
      </div>
    );
  }
}

export default App;
