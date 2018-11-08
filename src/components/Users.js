import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.guid}>
        Name: {user.name.first} {user.name.last} <br />
        Location: {user.location}
        <br />
        department: {user.department}
      </li>
    ));
  }

  render() {
    return (
      <Fragment>
        <h2>Users</h2>
        <ul>{this.renderUsers()}</ul>
      </Fragment>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
