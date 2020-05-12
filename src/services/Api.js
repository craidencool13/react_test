import api from "./config";

export default class Api {
  static get(url) {
    return api.get(url);
  }

  static post(url, params = {}) {
    return api.post(url, params);
  }

  static patch(url, params = {}) {
    return api.patch(url, params);
  }

  static delete(url) {
    return api.delete(url);
  }
}
