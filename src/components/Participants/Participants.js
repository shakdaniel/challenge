import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import userFilter from "../../utils/userFilter";
import userPairing from "../../utils/userPairing";
import "./Participants.css";

class Participants extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const users = [...this.props.users];
    // console.log(users);
    const engineering = userFilter(users, "department", "engineering");
    const ny = userFilter(engineering, "location", "ny");
    const dub = userFilter(engineering, "location", "dub");
    const matches = [...userPairing(ny), ...userPairing(dub)];
    return matches.map(user => (
      <li key={user.take.id}>
        <div className="giver">
          {`
          ${user.give.name}
          (${user.give.department},
          ${user.give.location})
          `}
        </div>
        <div className="reciever">
          {`
          ${user.take.name}
          (${user.take.department},
          ${user.take.location})
          `}
        </div>
      </li>
    ));
  }

  render() {
    return <ul>{this.renderUsers()}</ul>;
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
