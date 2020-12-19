let accessToken = "";
let logedIn = false;

export const setLogedIn = (cond) => {
  logedIn = cond;
};

export const getLogedIn = () => {
  return logedIn;
};
export const setAccessToken = (s) => {
  accessToken = s;
};

export const getAccessToken = () => {
  return accessToken;
};
