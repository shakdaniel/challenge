import { FETCH_USERS } from "../actions/types";

const inititialState = {
  items: [],
  item: {}
};

export default function(state = inititialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      console.log("reducer");
      return {
        ...state,
        items: action.users
      };
    default:
      return state;
  }
}
