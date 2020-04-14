import React, { Component } from "react";
import axios from "axios";
const User = (props) => (
  <tr>
    <td>{props.user.fullName}</td>
    <td>{props.user.userMail}</td>
    <td>{props.user.userPhone}</td>
    <td>{props.user.userDOB.substring(0, 10)}</td>
  </tr>
);
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.userList = this.userList.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  userList() {
    return this.state.users.map((currentUser) => {
      return <User user={currentUser} key={currentUser._id} />;
    });
  }
  render() {
    return (
      <div>
        <h3>Users List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Full Name</th>
              <th>E-mail ID</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
