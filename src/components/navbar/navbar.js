import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import Modal from '@material-ui/core/Modal';
import ModalLog from "../modal/modal";
import LoginModal from "../modal/LoginModal";



function NavBar({ admin = true }) {

  const handleSignup = (username, email, password) => {console.log("sent Data :",username,email,password); setOpen(false);};
  const  handleLogin = (username, password) => {console.log("sent Data :",username,password); setOpen(false);}

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (<div style={{width : 'fit-content',margin: 'auto'}}>
    <LoginModal
      handleSignup={handleSignup}
      handleLogin={handleLogin}
  /></div>);




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
            src="https://seeklogo.com/images/S/sapphire-logo-42F8E750E2-seeklogo.com.gif"
            alt=""
          />
        </div>
        <div className="NavBar-links">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className="NavBar-link-home">
              <span>Home</span>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <div
              className="NavBar-link-adminDash"
              style={{
                display: admin ? "inline" : "none",
              }}
            >
              <span>Admin Dashboard</span>
            </div>
          </Link>
          <div className="NavBar-link-login">
            <Link style={{ textDecoration: "none" }}>
              <button onClick={handleOpen} >login</button>
            </Link>
          </div>
          <Link style={{ textDecoration: "none" }}>
            <div className="NavBar-link-BasketIcon">
              <AddShoppingCartOutlinedIcon fontSize="30px" />
            </div>
          </Link>
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
          <Link style={{ textDecoration: "none" }}>
            <div className="sandwisch-menu-link-home">
              <span>Home</span>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <div
              className="sandwisch-menu-link-adminDash"
              style={{
                display: admin ? "inline" : "none",
              }}
            >
              <span>Admin Dashboard</span>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }}>
            <div className="sandwisch-menu-link-login">
              <span>login</span>
            </div>
          </Link>

          <div className="sandwisch-menu-link-BasketIcon">
            <Link style={{ textDecoration: "none" }}>
              <AddShoppingCartOutlinedIcon fontSize="30px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
        </>
  );
}

export default NavBar;
