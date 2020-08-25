import React from 'react';
import PropTypes from 'prop-types';

import Pins from '../Pins/Pins';
import PinForm from '../PinForm/PinForm';

import boardData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';

class SingleBoard extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
    boardId: PropTypes.string.isRequired,
  }

  state = {
    pins: [],
    board: {},
    formOpen: false,
  }

  getPins = () => {
    const { boardId } = this.props;

    pinData.getPinsbyBoardId(boardId)
      .then((response) => this.setState({ pins: response }))
      .catch((err) => console.error('get pins broke!', err));
  };

  getBoard = () => {
    const { boardId } = this.props;

    boardData.getSingleBoardById(boardId)
      .then((response) => {
        const board = response.data;
        board.id = boardId;
        this.setState({ board });
      })
      .catch((err) => console.error('get single board failed!', err));
  }

  componentDidMount() {
    this.getBoard();
    this.getPins();
  }

  deletePin = (pinId) => {
    pinData.deletePin(pinId)
      .then(() => {
        this.getPins();
      })
      .catch((err) => console.error(err));
  };

  createPin = (newPin) => {
    pinData.addPin(newPin)
      .then((res) => {
        this.getPins();
      })
      .catch((err) => console.error('get pins broke', err));
  }

  render() {
    const { setSingleBoard } = this.props;
    const { board, pins, formOpen } = this.state;

    const pinCard = pins.map((pin) => <Pins key={pin.id} pin={pin} deletePin={this.deletePin} />);

    return (
    <div>
      <h4>{board.name}</h4>
      <button className="btn btn-warning mr-2" onClick={ () => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square"></i></button>
      { formOpen ? <PinForm board={ board } createPin={this.createPin}/> : ''}
      <button className="btn btn-secondary" onClick={() => setSingleBoard('')}>Back To Boards <i className="ml-2 fas fa-undo"></i></button>
      <div className="card-columns">
        {pinCard}
      </div>
    </div>
    );
  }
}

export default SingleBoard;
