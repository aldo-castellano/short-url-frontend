import axios from "axios";

const managerUrl = async (path) => {
  const originalWeb = await axios.get(
    `${process.env.REACT_APP_API_URL2}api/webs/${path}`,
  );
  console.log(originalWeb);
  return (window.location.href = originalWeb.data);
};
export default managerUrl;
