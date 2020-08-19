import React from 'react';
import PropTypes from 'prop-types';

import Pins from '../Pins/Pins';

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
  }

  componentDidMount() {
    const { boardId } = this.props;

    boardData.getSingleBoardById(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error('get single board failed!', err));

    pinData.getPinsbyBoardId(boardId)
      .then((response) => this.setState({ pins: response }))
      .catch((err) => console.error('get pins broke!', err));
  }

  render() {
    const { setSingleBoard } = this.props;
    const { board, pins } = this.state;

    const pinCard = pins.map((pin) => <Pins key={pin.id} pin={pin} />);
    return (
    <div>
      <h4>{board.name}</h4>
      <button className="btn btn-secondary" onClick={() => setSingleBoard('')}>Back To Boards</button>
      <div className="card-columns">
        {pinCard}
      </div>
    </div>
    );
  }
}

export default SingleBoard;
