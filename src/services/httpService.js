import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Just add the necessary method, if the app grows then add the rest of necessary methods
export default {
  get: axios.get,
};
