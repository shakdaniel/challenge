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

const userPairing = participants => {
  participants = shuffle(participants);
  let matches = rotate(participants.slice(0));
  let pairs = [];

  for (var i = 0; i < participants.length; i++) {
    pairs.push([participants[i], matches[i]]);
  }

  return pairs;
};

export default userPairing;
