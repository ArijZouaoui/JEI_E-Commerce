import Routes from "./Routes";
import React from "react";
import { useEffect, useState } from "react";
import { setAccessToken, setLogedIn } from "./utils/tokenHandler";
import { getUser, setUser } from "./utils/User";
import axios from "axios";

const App = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/auth/users/refreshToken",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        const { accessToken, userName, admin, userId } = response.data;
        setAccessToken(accessToken);
        setLogedIn(true);
        setUser({ userName, userId, admin });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return <>{loading ? <div>loading...</div> : <Routes />}</>;
};

export default App;
