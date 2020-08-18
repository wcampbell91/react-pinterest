import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import 'firebase/app';
import './MyNavbar.scss';

import Auth from '../Auth/Auth';

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
    return (
      <div>
        <nav className="navbar navbar-light bg-danger">
          <a className="navbar-brand" href="#App">Pinterest</a>
          {
            authed
              ? <button className="btn btn-secondary" onClick={this.logoutClickEvent}>Logout</button>
              : <Auth />
          }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
