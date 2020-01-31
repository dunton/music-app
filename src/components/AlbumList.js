// import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // DEFINE STATE
  constructor(props) {
    super(props);
    this.state = {
      albums:[]
    }
    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentWillMount() {
    // API CALLT
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums:response.data}));
    console.log(this.state.albums)
  }


  renderAlbums() {
    return this.state.albums.map(album=>
      <AlbumDetail key={album.title} album={album} />
    )
  }


  render() {

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
