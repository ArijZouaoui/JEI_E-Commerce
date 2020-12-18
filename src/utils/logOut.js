import axios from "axios";
import { setLogedIn } from "./tokenHandler";
import { setUser } from "./User";
export const logOut = () => {
  setLogedIn(false);
  setUser({});

  axios
    .post(
      "http://localhost:5000/auth/users/logout",
      {},
      { withCredentials: true }
    )
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
};
