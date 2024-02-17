import axios from "axios";

const instance = axios.create({
  baseURL: "https://apiforapps.com/testpronodejs/songs/",
});

export default instance;
