import { Link } from "react-router-dom";
import { useState } from "react";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
function NavBar({ admin = true }) {
  let [counter, setcounter] = useState(0);
  return (
    <div className="NavBar-container">
      <div className="NavBar">
        <div className="NavBar-logo">
          <img
            src="https://seeklogo.com/images/S/sapphire-logo-42F8E750E2-seeklogo.com.gif"
            alt=""
          ></img>
        </div>
        <div className="NavBar-links">
          <Link style={{ textDecoration: "none" }}>
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
              <button>login</button>
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
  );
}

export default NavBar;
