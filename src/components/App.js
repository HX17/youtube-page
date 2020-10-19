import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
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
