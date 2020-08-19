import React from 'react';

import pinShape from '../../helpers/props/pinShape';

class Pins extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="card text-center mt-3">
        <img className="card-img-top" src={pin.imageUrl} alt="poop"></img>
        <div className="card-body">
          <h5 className="card-title">{pin.title}</h5>
          <a href={pin.link}>Check it out!</a>
        </div>
      </div>
    );
  }
}

export default Pins;
