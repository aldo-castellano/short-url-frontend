import axios from "axios";

const postUrl = async (path) => {
  let originalWeb;

  try {
    originalWeb = await axios.post(
      `${process.env.REACT_APP_API_URL2}api/webs`,
      {
        original_url: path,
      },
    );
  } catch (error) {
    return error;
  }

  const { original_url, short_path_url } = originalWeb.data;

  const data = {
    original: original_url,
    short: `${process.env.REACT_APP_API_URL}${short_path_url}`,
  };

  return data;
};
export default postUrl;
