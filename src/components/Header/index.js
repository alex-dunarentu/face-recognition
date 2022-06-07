import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = ({ user, loadUser }) => {
  return (
    <nav className="Header">
      <div className="HeaderWrapper">
        <Logo />
        <div className="Navigation">
          <Link className="NavigationOption" to="/">
            Home
          </Link>
          {user.id ? (
            <Link onClick={() => loadUser({ id: "", name: "Guest", email: "", entries: 0, joined: "" })} className="NavigationOption" to="/sign-in">
              Sign Out
            </Link>
          ) : (
            <>
              <Link className="NavigationOption" to="/sign-in">
                Sign In
              </Link>

              <Link className="NavigationOption" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
