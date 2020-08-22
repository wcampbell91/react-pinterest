import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';

import authData from '../../helpers/data/AuthData';
import boardData from '../../helpers/data/boardsData';
import smash from '../../helpers/data/smash';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
  }

  getBoards = () => {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke!!', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deleteBoard = (boardId) => {
    smash.deleteBoardAndPins(boardId)
      .then(() => {
        console.error('success');
        this.getBoards();
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { boards } = this.state;
    const { setSingleBoard } = this.props;

    // map over boards to create <Board /> components

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard}/>);

    return (
      <div className="card-columns">
        { boardCard }
      </div>
    );
  }
}

export default BoardContainer;
