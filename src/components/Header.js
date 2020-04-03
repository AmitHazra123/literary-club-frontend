import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logout } from "../actions/auth";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const { classes, auth } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py=0 fixed-top">
        <a className="navbar-brand" href="/">
          <img src={require("../logo.png")} height="70px" width="80px" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/feeds">
                Feeds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/teams">
                Team profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a
              className="nav-link"
              href="https://www.facebook.com/heritageliteraryclub/"
            >
              <img
                src={require("../fb.png")}
                height="30px"
                width="20px"
                alt=""
              />
            </a>
            <a
              className="nav-link"
              href="https://www.instagram.com/heritageliteraryclub/"
            >
              <img
                src={require("../insta.png")}
                height="30px"
                width="25px"
                alt=""
              />
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/admin" className="nav-link nav-item">
                  {auth.isAuthenticated ? "Dashboard" : ""}
                </a>
              </li>
            </ul>

            <a
              onClick={() =>
                !auth.isAuthenticated
                  ? (window.location.href = "/login")
                  : this.logout()
              }
              className="btn btn-primary"
            >
              {auth.isAuthenticated ? "Logout" : "Login"}
            </a>
          </form>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
