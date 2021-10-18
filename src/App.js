import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CommentForm from './components/CommentForm/CommentForm';
import RealatedVideos from './components/RelatedVideos/RelatedVideos';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        videoId:'',
        title:'',
        comments: '',
        commentBody:'',
        relatedVideos:'',
      }
  }

  componentDidMount() {
    this.searchVideo('software development')
    this.getComments();
  }

  searchVideo = async (searchQuery) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&type=video&part=snippet&key=APIkey`);
    let allVideos = response.data;

    this.getRelatedVideos({
      videoId: allVideos.items[0].id.videoId,
      title: allVideos.items[0].snippet.title,
    })

    
  }
  getRelatedVideos = async (video) =>{
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video.videoId}&type=video&part=snippet&key=APIkey`);
    let relatedVideos = response.data.items.filter(video => video.snippet);
    let relatedVideosArray = relatedVideos.map((video) =>{
      return ({
        videoId: video.id.videoId,
        title: video.snippet.title,
      });
    });
    this.setState({
      videoId: video.videoId,
      title: video.title,
      relatedVideos: relatedVideosArray
    })

  }

  getComments = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/comments/')
          this.setState({
          comments: response.data,
          })
    }
    catch (err) {
      console.log(err)
    }
  }
  
  addComment = async () => {
    const comment = {
      videoId:this.props.videoId,
      commentBody: this.state.commentBody,
    }
    try{
      await axios.post('http://127.0.0.1:8000/comment/', comment);
      this.props.getComments();
      this.setState({
      });
    }
    catch(err){
      console.log(err)
    }
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
          <RealatedVideos/>
          <CommentForm/>

        </React.Fragment>
      </div>
    );
  }
}

export default App;
