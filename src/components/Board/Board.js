import React from 'react';
import PropTypes from 'prop-types';

import boardShape from '../../helpers/props/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, deleteBoard } = this.props;
    deleteBoard(board.id);
  };

  render() {
    const { board } = this.props;
    return (
      <div className="card text-center mt-4">
        <div className="card-body">
          <h5 className="card-title">{board.name}</h5>
          <p className="card-text">{board.description}</p>
          <button className="btn btn-primary" onClick={this.singleBoardEvent}>View Board Details <i className="ml-2 fas fa-search-plus"></i></button>
          <button className="btn btn-danger mt-2" onClick={this.deleteBoardEvent}>Delete Board</button>
        </div>
      </div>
    );
  }
}

export default Board;
