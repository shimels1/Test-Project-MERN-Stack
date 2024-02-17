import axios from "axios";

const instance = axios.create({
  baseURL: "http://apiforapps.com/testpronodejs/songs/",
});

export default instance;
