import React, { Fragment, useState, useEffect } from "react";
import userFilter from "../../utils/userFilter";
import userPairing from "../../utils/userPairing";
import "./Participants.css";

const Participants = () => {
  const url =
    "https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(data.users); // set users in state
      });
  }, []); // empty array because we only run once

  console.log(users);

  const newUsers = [...users];
  const engineering = userFilter(newUsers, "department", "engineering");
  const ny = userFilter(engineering, "location", "ny");
  const dub = userFilter(engineering, "location", "dub");
  const matches = [...userPairing(ny), ...userPairing(dub)];

  console.log(matches);

  return (
    <Fragment>
      <h1>Matches</h1>
      <ul>
        {matches.map(user => (
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
        ))}
      </ul>
    </Fragment>
  );
};

export default Participants;
