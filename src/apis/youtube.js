import axios from "axios";

const KEY = "AIzaSyA3g65pmydCTyjfw0IVlSn7iERZWDwJ5ZI";

// pre-config of axios
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
