import { useState } from "react";
import postUrl from "../helper/postUrl";
import validator from "validator";

import ShortList from "../components/Short-list/ShortList";

const Main = () => {
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(true);
  const [shortUrl, setShortUrl] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isURL(url)) {
      const data = await postUrl(url);

      setShortUrl(data);
      setUrl("");
    } else {
      setValid(false);
    }
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
    setValid(true);
  };

  return (
    <>
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
              {!valid ? <p className="error-input">url no valida</p> : null}
            </form>
          </div>
        </div>

        {shortUrl ? <ShortList url={shortUrl}></ShortList> : null}
      </div>
    </>
  );
};

export default Main;
