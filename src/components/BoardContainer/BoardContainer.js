import React from 'react';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';

import authData from '../../helpers/data/AuthData';
import boardData from '../../helpers/data/boardsData';
import smash from '../../helpers/data/smash';

// create board
// BoardForm Component
// Show BoardForm onClick of some button in here
// need a button in BoardContainer
// finish out form and figure out inputs
// on submit of form: save to firebase, make sure board shows up

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
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

  createBoard = (newBoard) => {
    boardData.createBoard(newBoard)
      .then((res) => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('create Board broke!', err));
  };

  editABoard = (boardToEdit) => {
    console.error(boardToEdit);
    this.setState({ formOpen: true, editBoard: boardToEdit });
  };

  render() {
    const { boards, formOpen, editBoard } = this.state;
    const { setSingleBoard } = this.props;

    // map over boards to create <Board /> components

    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard} editABoard={this.editABoard}/>);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}>
          {formOpen ? <i class="far fa-window-close"></i> : <i className="far fa-plus-square"></i>}
        </button>
        {formOpen ? <BoardForm createBoard={this.createBoard} board={ editBoard } /> : ''}
        <div className="card-columns offset-3">
          { boardCard }
        </div>
      </div>
    );
  }
}

export default BoardContainer;
