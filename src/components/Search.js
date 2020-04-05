import React, { Component } from 'react';

class Search extends Component {

    state = { artistQuery: "" }


    upadateArtistQuery = event => {
        this.setState({
            artistQuery: event.target.value
        })
    }

    handleKeyPress = () => {
        if (event.key === "Enter") {
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.upadateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an Artist"
                />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )

    }
}

export default Search