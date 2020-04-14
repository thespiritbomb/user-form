import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeUserMail = this.onChangeUserMail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserDOB = this.onChangeUserDOB.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName: "",
      userMail: "",
      userPhone: "",
      userDOB: new Date(),
    };
  }
  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }
  onChangeUserMail(e) {
    this.setState({
      userMail: e.target.value,
    });
  }
  onChangeUserPhone(e) {
    this.setState({
      userPhone: e.target.value,
    });
  }
  onChangeUserDOB = (date) => {
    this.setState({
      userDOB: date,
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const user = {
      fullName: this.state.fullName,
      userMail: this.state.userMail,
      userPhone: this.state.userPhone,
      userDOB: this.state.userDOB,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
    window.location.href = "/";
  }
  state = {};
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.fullName}
              onChange={this.onChangeFullName}
            />
          </div>
          <div className="form-group">
            <label>E-mail ID</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.userMail}
              onChange={this.onChangeUserMail}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.userPhone}
              onChange={this.onChangeUserPhone}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <div>
              <Calendar
                onChange={this.onChangeUserDOB}
                value={this.state.date}
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
