import { useState, useEffect } from "react";
import postUrl from "../helper/postUrl";
import validator from "validator";
import managerUrl from "../helper/managerUrl";
import ShortList from "../components/Short-list/ShortList";

const shortid = require("shortid");

const Main = () => {
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(false);
  const [shortUrl, setShortUrl] = useState();
  const [copy, setCopy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isURL(url)) {
      const data = await postUrl(url);

      setShortUrl(data);
      setUrl("");
    } else {
      setValid(true);
    }
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
    setValid(false);
  };

  return (
    <div className="container">
      <div>
        <h1 className="logo">shortener url</h1>
        <div>
          <form className="form-shorter" onSubmit={handleSubmit}>
            <input
              type="text"
              value={url}
              placeholder="Escribe tu URL aqui"
              id="url"
              className="input-shorter"
              onChange={handleChange}
            ></input>
            <button className=" button button-shorter">cut off</button>
            {!valid ? null : <p className="error-input">url no valida</p>}
          </form>
        </div>
      </div>

      {shortUrl ? <ShortList url={shortUrl} copy={setCopy}></ShortList> : null}
    </div>
  );
};

export default Main;
