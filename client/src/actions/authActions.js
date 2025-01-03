export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const loginSuccess = (
  username,
  role,
  id,
  email,
  first_name,
  last_name
) => ({
  type: LOGIN_SUCCESS,
  payload: { username, role, id, email, first_name, last_name },
});

export const logoutSuccess = () => ({
  type: LOGOUT
});
