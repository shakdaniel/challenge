const userPairing = arr => {
  let give = arr.sort(arr => Math.random() - 0.5);

  let take = [...give];
  take.push(take.shift());

  let match = [];

  give.map((item, i) =>
    match.push(
      Object.assign(
        {},
        {
          give: {
            name: `${item.name.first} ${item.name.last}`,
            department: `${item.department}`,
            location: `${item.location}`,
            id: `${item.guid}`
          }
        },
        {
          take: {
            name: `${take[i].name.first} ${take[i].name.last}`,
            department: `${take[i].department}`,
            location: `${take[i].location}`,
            id: `${take[i].guid}`
          }
        }
      )
    )
  );

  return match;
};

export default userPairing;
