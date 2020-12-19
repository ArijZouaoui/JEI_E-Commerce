import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import Modal from "@material-ui/core/Modal";
import LoginModal from "../modal/LoginModal";
import axios from "axios";
import { setUser, getUser } from "../../utils/User";
import { getLogedIn, setAccessToken } from "../../utils/tokenHandler";
import { setLogedIn } from "../../utils/tokenHandler";
import { logOut } from "../../utils/logOut";
import { useHistory } from "react-router-dom";
function NavBar() {
  const history = useHistory();

  let [logedInL, setLogedInL] = useState(getLogedIn());
  let [userL, setUserL] = useState(getUser());
  const u = getUser();
  const l = getLogedIn();
  useEffect(() => {
    setUserL(u);
    setLogedIn(l);
  }, [u, l]);

  const handleSignup = (username, email, password) => {
    console.log("sent Data :", username, email, password);
    axios
      .post("http://localhost:5000/auth/users/signup", {
        userName: username,
        email: email,
        password: password,
        phoneNumber: 23569885,
        address: "rue junior entreprise insat ",
        admin: true,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };
  const handleLogin = (username, password) => {
    console.log("sent Data :", username, password);
    axios
      .post(
        "http://localhost:5000/auth/users/login",
        {
          userName: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        const { accessToken, userId, userName, admin } = response.data;
        setAccessToken(accessToken);
        setUser({ userId, userName, admin });
        setLogedInL(true);
        setLogedIn(logedInL);
      })
      .catch((err) => console.log(err));

    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <LoginModal handleSignup={handleSignup} handleLogin={handleLogin} />
    </div>
  );

  let [counter, setcounter] = useState(0);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <div className="NavBar-container">
        <div className="NavBar">
          <div className="NavBar-logo">
            <img
              className="NavBar-logo-img"
              src="https://s.globalsources.com/IMAGES//SPL/LOGO/784/L8855114784.jpg"
              alt=""
            />
          </div>
          <div className="NavBar-links">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className="NavBar-link-home">
                <span>Home</span>
              </div>
            </Link>
            {userL.admin && logedInL ? (
              <Link style={{ textDecoration: "none" }} to="/dashboard">
                <div className="NavBar-link-adminDash">
                  <span>Admin Dashboard</span>
                </div>
              </Link>
            ) : logedInL ? (
              <div>
                <span
                  style={{ color: "#CC0000" }}
                >{`hello ${userL.userName} `}</span>
              </div>
            ) : (
              ""
            )}
            {!logedInL ? (
              <div className="NavBar-link-login">
                <Link style={{ textDecoration: "none" }}>
                  <button onClick={handleOpen}>login</button>
                </Link>
              </div>
            ) : (
              <div className="NavBar-link-login">
                <Link style={{ textDecoration: "none" }}>
                  <button
                    onClick={() => {
                      logOut();
                      setLogedInL(false);
                      setUser({});
                      history.push("/");
                    }}
                  >
                    log out
                  </button>
                </Link>
              </div>
            )}
            {logedInL ? (
              <Link style={{ textDecoration: "none" }} to="/cart">
                <div className="NavBar-link-BasketIcon">
                  <AddShoppingCartOutlinedIcon fontSize="30px" />
                </div>
              </Link>
            ) : (
              <div className="NavBar-link-BasketIcon-notLogedIn">
                <AddShoppingCartOutlinedIcon
                  fontSize="30px"
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="sandwisch-menu">
          <div className="sandwish-menu-link-menuIcon">
            <MenuIcon
              fontSize="large"
              onClick={() => {
                setcounter((counter = counter + 1));
                if (counter > 2) {
                  setcounter((counter = 1));
                }
                console.log(counter);
              }}
            />
          </div>
          <div
            className="sandwisch-menu-links"
            style={{
              display: counter % 2 === 0 ? "none" : "flex",
            }}
          >
            <Link style={{ textDecoration: "none", color: "cc0000" }} to="/">
              <div className="sandwisch-menu-link-home">
                <span>Home</span>
              </div>
            </Link>

            {userL.admin ? (
              <Link
                style={{ textDecoration: "none", color: "cc0000" }}
                to="/dashboard"
              >
                <div className="sandwisch-menu-link-adminDash">
                  <span>Admin Dashboard</span>
                </div>
              </Link>
            ) : (
              ""
            )}

            {!logedInL ? (
              <Link
                style={{ textDecoration: "none", color: "cc0000" }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className="sandwisch-menu-link-login">
                  <span>login</span>
                </div>
              </Link>
            ) : (
              <button
                className="sandwisch-menu-link-login-true"
                onClick={() => {
                  logOut();
                  setLogedInL(false);
                  setUser({});
                  history.push("/");
                }}
              >
                logOut
              </button>
            )}

            <div className="sandwisch-menu-link-BasketIcon">
              {logedInL ? (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/cart" /*correct : component={CartList{user}}*/
                >
                  <div className="NavBar-link-BasketIcon">
                    <AddShoppingCartOutlinedIcon fontSize="30px" />
                  </div>
                </Link>
              ) : (
                <div className="NavBar-link-BasketIcon-notLogedIn">
                  <AddShoppingCartOutlinedIcon
                    fontSize="30px"
                    onClick={() => setOpen(true)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
