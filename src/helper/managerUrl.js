import axios from "axios";

const managerUrl = async (path) => {
  console.log(path, "hola");
  try {
    const originalWeb = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/webs/${path}`,
    );

    return (window.location.href = originalWeb.data);
  } catch (error) {
    return error;
  }
};
export default managerUrl;
