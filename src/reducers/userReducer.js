import { FETCH_USERS } from "../actions/types";

const inititialState = {
  items: []
};

export default function(state = inititialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.users
      };

    default:
      return state;
  }
}
