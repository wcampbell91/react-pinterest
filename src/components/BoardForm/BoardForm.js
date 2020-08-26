import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/AuthData';

// user BoardForm for updating
// add some kind of edit button to boards
// on click, open up BoardForm with inputs populated w/ info
// on save/submit the board should update
// and re-render the BoardContainer

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
  }

  state ={
    name: '',
    description: '',
    isEditing: false,
  }

  componentDidMount() {
    const { board } = this.props;
    if (board.name) {
      this.setState({
        name: board.name,
        description: board.description,
        isEditing: true,
      });
    }
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const { createBoard } = this.props;

    const newBoard = {
      // can use shorthand because keys and state are the same
      name,
      description,
      uid: authData.getUid(),
    };

    createBoard(newBoard);
  };

  render() {
    const { name, description, isEditing } = this.state;
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="BoardName"
            placeholder="Enter Board Name"
            value={name}
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="boardDescription">Board Description</label>
          <input
            type="text"
            className="form-control"
            id="boardDescription"
            placeholder="Enter Board Description"
            value={description}
            onChange={this.changeDescriptionEvent}
          />
        </div>
        {
          isEditing
            ? <button className="btn btn-primary">Edit Board</button>
            : <button type="submit" className="btn btn-primary" onClick={this.saveBoardEvent}>Save Board</button>
        }
      </form>
    );
  }
}

export default BoardForm;
