import axios from "axios";
import validator from "validator";
const shortid = require("shortid");
const managerUrl = async (path) => {
  const originalWeb = await axios.get(`http://localhost:4000/api/webs/${path}`);

  return (window.location.href = originalWeb.data);
};
export default managerUrl;
