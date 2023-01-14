import axios from "axios";

import config from "../config.json";

export function login(userId, password) {
  return axios.post(config.apiUrl + "/auth", { userId, password });
}
