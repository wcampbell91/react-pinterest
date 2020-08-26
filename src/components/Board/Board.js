import React from 'react';
import PropTypes from 'prop-types';

import boardShape from '../../helpers/props/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    editABoard: PropTypes.func.isRequired,
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

  editBoardEvent = (e) => {
    e.preventDefault();
    const { editABoard, board } = this.props;
    editABoard(board);
  };

  render() {
    const { board } = this.props;
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{board.name}</h5>
          <p className="card-text">{board.description}</p>
          <div className="btn-group mb-2 " role="group">
            <button className="btn btn-primary" onClick={this.singleBoardEvent}><i className="ml-2 fas fa-search-plus"></i></button>
            <button className="btn btn-warning" onClick={this.editBoardEvent}><i className="far fa-edit"></i></button>
          </div>
        </div>
        <div className="card-footer">
            <button className="btn btn-danger" onClick={this.deleteBoardEvent}>Delete Board</button>
        </div>
      </div>
    );
  }
}

export default Board;
