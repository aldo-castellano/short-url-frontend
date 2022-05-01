import axios from "axios";
const shortid = require("shortid");
const postUrl = async (path) => {
  const originalWeb = await axios.post(`//localhost:4000/api/webs`, {
    original_url: path,
  });

  const { original_url, short_path_url } = originalWeb.data;
  const resp = {
    original: original_url,
    short: `${process.env.REACT_APP_API_URL}${short_path_url}`,
  };

  return resp;
};
export default postUrl;
