import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // todo: make sure we call callback from parent component
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
          </div>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
