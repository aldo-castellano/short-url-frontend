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

    if (validator.isURL(url)) {
      const data = await postUrl(url);

      setShortUrl(data.short);
      setUrl("");
    } else {
      setValid(true);
    }
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
    setValid(false);
  };

  const validatorUrl = () => {
    if (validator.isURL(url)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <h1>shorter web</h1>
      <div className="input-shorted">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            id="url"
            onChange={handleChange}
          ></input>
          <button>uuid</button>
          {!valid ? null : <p>url no valida</p>}
        </form>
      </div>
      {shortUrl ? (
        <a href={shortUrl} target="_blank">
          {shortUrl}
        </a>
      ) : null}
    </div>
  );
};

export default Main;
