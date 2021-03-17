import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to={`/`} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Trending Videos
          </Navbar.Brand>
        </Navbar>
      </Link>
    </>
  );
};

export default Header;
