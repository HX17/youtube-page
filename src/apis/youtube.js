import axios from "axios";

const KEY = "AIzaSyBx5pyzD8wXcTsjSecLqtCxngmotA4zTQw";

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
