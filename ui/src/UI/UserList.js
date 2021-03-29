
import React, { Component } from "react";
import axios from 'axios';
import UserTableRow from './UserTableRow';

export default class  UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
       users: []
      
      };
    }
    
    componentDidMount() {
        const url = 'http://localhost:80/omobioTest/bizlogic/users.php';
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ users: data })
          console.log(this.state.users)
         })
      }

       DataTable() {
         return this.state.users.map((res, i) => {
             return <UserTableRow obj={res} key={i} />
         });
       }

  render() {
    return (
    <div className="container-fluid">
    <div className="table-wrapper" style={{marginTop:"100px"}}>
    <h1 align="center">User List</h1>
      <table className="table table-striped table-dark mt-3" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
         {this.DataTable()} 
        </tbody>
      </table>
    </div>
    </div>);
  }
}
