import axios from "axios";

const KEY = "AIzaSyCT4-SBymbIZmdhH9MDhGdjX1TM4ucMw60";

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
