import React, { Component } from "react";

class Search extends Component {
    state = { artistQuery: "", }
  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyDown={this.handleKeyPress}
          placeholder="Search for an artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
