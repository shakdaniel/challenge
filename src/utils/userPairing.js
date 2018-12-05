// const shuffle = array => {
//   for (let i = array.length; i; ) {
//     let randomize = Math.floor(Math.random() * i--);
//     let giver = array[i];
//     array[i] = array[randomize];
//     array[randomize] = giver;
//   }
//   return array;
// };

// const rotate = array => {
//   array.push(array.shift());
//   return array;
// };

// const userPairing = giver => {
//   giver = shuffle(giver);
//   let recievers = rotate(giver.slice(0));
//   let match = [];

//   for (var i = 0; i < giver.length; i++) {
//     match.push(Object.assign({}, [giver[i], recievers[i]]));
//   }

//   return match;
// };

const userPairing = arr => {
  let give = arr.sort(arr => Math.random() - 0.5);

  let take = [...give];
  take.push(take.shift());

  let match = [];

  give.map((item, i) => {
    return match.push(
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
    );
  });

  return match;
};

export default userPairing;
