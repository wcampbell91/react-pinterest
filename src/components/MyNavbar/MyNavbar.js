import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import 'firebase/app';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    if (authed) {
      return (
        <div>
          <nav className="navbar navbar-light bg-danger">
            <a className="navbar-brand" href="#App">Pinterest</a>
            <button className="btn btn-secondary" onClick={this.logoutClickEvent}>Logout</button>
          </nav>
        </div>
      );
    }
    return (
    <div>
      <nav className="navbar navbar-light bg-light">
      </nav>
    </div>
    );
  }
}

export default MyNavbar;
