// services/apiService.js
import axios from "axios";

const serverURL = "http://localhost:3000";

const postData = async (url, body) => {
  try {
    const response = await axios.post(`${serverURL}/api/${url}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (e) {
    console.error("POST error:", e);
    return null;
  }
};

const getData = async (url) => {
  try {
    const response = await axios.get(`${serverURL}/api/${url}`);
    return response.data;
  } catch (e) {
    console.error("GET error:", e);
    return null;
  }
};

export { serverURL, postData, getData };
