import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // term input will be fed back from child (SearchBar) component
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // initial rendering
  useEffect(() => {
    onTermSubmit("cars");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(v) => setSelectedVideo(v)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
// import VideoList from "./VideoList";
// import VideoDetail from "./VideoDetail";

// class App extends Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("cars");
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0], // show first video on the left in videoDetail
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
// <div className="ui container">
//   <SearchBar onSubmit={this.onTermSubmit} />
//   <div className="ui grid">
//     <div className="ui row">
//       <div className="eleven wide column">
//         <VideoDetail video={this.state.selectedVideo} />
//       </div>
//       <div className="five wide column">
//         <VideoList
//           videos={this.state.videos}
//           onVideoSelect={this.onVideoSelect}
//         />
//       </div>
//     </div>
//   </div>
// </div>
//     );
//   }
// }

// export default App;
