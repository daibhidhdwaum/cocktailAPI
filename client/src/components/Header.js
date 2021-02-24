import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <header>
        <Link to={this.props.auth ? "/dashboard" : "/"}>
          <h1>CocktailAPI</h1>
        </Link>
        <ul>{this.renderContent()}</ul>
      </header>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
