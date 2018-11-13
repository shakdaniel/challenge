const shuffle = array => {
  for (let i = array.length; i; ) {
    let randomize = Math.floor(Math.random() * i--);
    let giver = array[i];
    array[i] = array[randomize];
    array[randomize] = giver;
  }
  return array;
};

const rotate = array => {
  array.push(array.shift());
  return array;
};

const userPairing = giver => {
  giver = shuffle(giver);
  let recievers = rotate(giver.slice(0));
  let match = [];

  for (var i = 0; i < giver.length; i++) {
    match.push(Object.assign({}, [giver[i], recievers[i]]));
  }

  return match;
};

export default userPairing;
