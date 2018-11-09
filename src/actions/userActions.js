import { FETCH_USERS } from "./types";

export const fetchUsers = () => dispatch => {
  fetch(
    "https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users"
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_USERS,
        users: data.users
      })
    )
    .catch(err => {
      console.error(err);
    });
};
