import React from "react";
// import userFilter from "../../utils/userFilter";
// import userPairing from "../../utils/userPairing";

const Match = ({ users, fetchUsers }) => {
  const usersList = [...users];
  console.log(usersList);
  return <div>Hello</div>;
};
// const users = [...props];
// const engineering = userFilter(users, "department", "engineering");
// const ny = userFilter(engineering, "location", "ny");
// const dub = userFilter(engineering, "location", "dub");
// const matches = [...userPairing(ny), ...userPairing(dub)];
// return matches.map(user => (
// <li key={user.take.id}>
//   <div className="giver">
//     {`
//     ${user.give.name}
//     (${user.give.department},
//     ${user.give.location})
//     `}
//   </div>
//   <div className="reciever">
//     {`
//     ${user.take.name}
//     (${user.take.department},
//     ${user.take.location})
//     `}
//   </div>
// </li>
// ));

export default Match;
