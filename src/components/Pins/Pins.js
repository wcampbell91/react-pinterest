import React from 'react';
import PropTypes from 'prop-types';

import pinShape from '../../helpers/props/pinShape';

class Pins extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func.isRequired,
    editAPin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  };

  editPinEvent = (e) => {
    e.preventDefault();
    const { pin, editAPin } = this.props;
    editAPin(pin);
  };

  render() {
    const { pin } = this.props;
    return (
      <div className="card text-center mt-3">
        <img className="card-img-top" src={pin.imageUrl} alt="poop"></img>
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
          <a href={pin.link}>Check it out!</a>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={this.deletePinEvent}><i className="far fa-trash-alt"></i></button>
          <button className="btn btn-warning" onClick={this.editPinEvent}><i className="far fa-edit"></i></button>
        </div>
      </div>
    );
  }
}

export default Pins;
