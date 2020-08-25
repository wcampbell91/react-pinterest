import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/AuthData';
import boardShape from '../../helpers/props/boardShape';

class PinForm extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    createPin: PropTypes.func.isRequired,
  }

  state = {
    title: '',
    link: '',
    imageUrl: '',
  }

  changeTitleEvent = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };

  changeLinkEvent = (e) => {
    e.preventDefault();
    this.setState({ link: e.target.value });
  };

  changeImageEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  };

  savePinEvent = (e) => {
    const { board, createPin } = this.props;
    const { title, link, imageUrl } = this.state;

    const newPin = {
      boardId: board.id,
      title,
      link,
      imageUrl,
      uid: authData.getUid(),
    };
    console.error('here is my new pin', newPin);
    createPin(newPin);
  };

  render() {
    return (
      <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="pinTitle">Pin Name</label>
        <input
          type="text"
          className="form-control"
          id="pinNTme"
          placeholder="Enter Pin Name"
          onChange={this.changeTitleEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pinLink">Web Url</label>
        <input
          type="text"
          className="form-control"
          id="pinLink"
          placeholder="Enter Pin Web Url"
          onChange={this.changeLinkEvent}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pinImageUrl">Image Url</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          placeholder="Enter Pin Image Url"
          onChange={this.changeImageEvent}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2" onClick={this.savePinEvent}>Save Board</button>
    </form>
    );
  }
}

export default PinForm;
