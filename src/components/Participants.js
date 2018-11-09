import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import userPairing from "../utils/userPairing";

class Participants extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const users = [...this.props.users];

    const nyParticipants = [];

    const duParticipants = [];

    for (let user of users) {
      if (user.department === "engineering" && user.location === "ny") {
        nyParticipants.push(user);
      }
      if (user.department === "engineering" && user.location === "dub") {
        duParticipants.push(user);
      }
    }
    const participants = userPairing(nyParticipants).concat(
      userPairing(duParticipants)
    );

    console.log(participants);
    return participants.map(user => (
      <li key={user[0].guid}>
        {/* {user[0].department} {user[0].location} <br /> */}
        {user[0].name.first} {user[0].name.last} -> {user[1].name.first}{" "}
        {user[1].name.last}
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

Participants.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Participants);
