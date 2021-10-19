import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      
      }
  }

  componentDidMount() {
    this.searchVideo('software development')
    this.getComments();
  }

  searchVideo = async (searchQuery) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=APIkey`);
    let allVideos = response.data;

    
  }

  render() { 
    return (
      <div className="bg-secondary ">
        <React.Fragment>
        <br />
          <br />
          <div className="container bg-light text-dark border border-primary">
          <u><h1 className="marquee">YouTube Clone</h1></u>
          <br />
          <SearchBar searchVideo={this.searchVideo}/>
          </div>
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center">
          <iframe class="border border-primary" id="ytplayer" title="title" type="text/html" width="640" height="360"
              src={`https://www.youtube.com/embed/${this.state.videoId}?`}
              frameborder="0"></iframe>
          </div>
          <div className="container">
          <h2>{this.state.videoTitle}</h2>
          <h3>{this.state.videoDescription}</h3>
          </div>
          <br />
          <br />

        </React.Fragment>
      </div>
    );
  }
}

export default App;