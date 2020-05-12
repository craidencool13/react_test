import axios from "axios";

export default axios.create({
  baseURL: "https://subscribe-carly.drivemycar.me/api/",
  headers: {
    "Content-type": "application/json"
  }
});