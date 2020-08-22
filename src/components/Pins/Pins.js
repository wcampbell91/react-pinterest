import React from 'react';
import PropTypes from 'prop-types';

import pinShape from '../../helpers/props/pinShape';

class Pins extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  };

  render() {
    const { pin } = this.props;
    return (
      <div className="card text-center mt-3">
        <img className="card-img-top" src={pin.imageUrl} alt="poop"></img>
        <div className="card-body">
          <button className="btn btn-danger" onClick={this.deletePinEvent}>Delete pin</button>
          <h5 className="card-title">{pin.title}</h5>
          <a href={pin.link}>Check it out!</a>
        </div>
      </div>
    );
  }
}

export default Pins;
