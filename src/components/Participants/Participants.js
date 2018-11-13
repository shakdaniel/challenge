import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import userPairing from "../../utils/userPairing";
import "./Participants.css";

class Participants extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const users = [...this.props.users];
    const engineering = users.filter(user => user.department === "engineering");
    const ny = engineering.filter(user => user.location === "ny");
    const dub = engineering.filter(user => user.location === "dub");
    const participants = userPairing(ny).concat(userPairing(dub));

    // console.log(participants);
    return participants.map(user => (
      <li key={user[0].guid}>
        <div className="giver">
          {user[0].name.first} {user[0].name.last}
        </div>
        <div className="reciever">
          {user[1].name.first} {user[1].name.last}
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
