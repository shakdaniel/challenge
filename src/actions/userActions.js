import { FETCH_USERS } from "./types";

const url =
  "https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users";

export const fetchUsers = () => dispatch =>
  fetch(url)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_USERS,
        users: data.users
      })
    )
    .catch(error => {
      console.error(error);
    });
