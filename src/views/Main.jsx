import { useState, useEffect } from "react";
import postUrl from "../helper/postUrl";
import validator from "validator";
import managerUrl from "../helper/managerUrl";

const shortid = require("shortid");

const Main = () => {
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(false);
  const [shortUrl, setShortUrl] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postUrl(url);

    setShortUrl(data.short);
    setUrl("");
    setValid(false);
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    if (validator.isURL(url)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [url]);

  return (
    <div>
      <h1>Esto es el main</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} id="url" onChange={handleChange}></input>
        <button disabled={valid ? false : true}>uuid</button>
        {valid ? null : <p>url no valida</p>}
      </form>
      {shortUrl ? (
        <a href={shortUrl} target="_blank">
          {shortUrl}
        </a>
      ) : null}
    </div>
  );
};

export default Main;
