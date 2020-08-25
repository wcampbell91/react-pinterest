import React from 'react';

import authData from '../../helpers/data/AuthData';

// new board requires:
// description
// name
// uid (currentUser)

class BoardForm extends React.Component {
  state ={
    name: '',
    description: '',
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
    const newBoard = {
      // can use shorthand because keys and state are the same
      name,
      description,
      uid: authData.getUid(),
    };

    console.error('here is a new board', newBoard);
  };

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Name</label>
          <input
            type="text"
            className="form-control"
            id="BoardName"
            placeholder="Enter Board Name"
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
            onChange={this.changeDescriptionEvent}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;