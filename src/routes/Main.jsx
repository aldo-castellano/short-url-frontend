import { useState, useEffect, useContext } from "react";
import postUrl from "../helper/postUrl";
import validator from "validator";
import ShortList from "../components/ShortList/ShortList";
import AuthContext, { AuthProvider } from "../context/AuthProvider";

const Main = () => {
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(true);
  const [listUrl, setListUrl] = useState([]);
  const [user] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isURL(url)) {
      const data = await postUrl(url);
      console.log(data);
      let tempData = [...listUrl];

      tempData.unshift(data);
      if (!user) {
        localStorage.setItem("mylist", JSON.stringify(tempData.slice(0, 2)));
      }
      setListUrl(tempData.slice(0, 4));

      setUrl("");
    } else {
      setValid(false);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
    setValid(true);
  };

  const managerUrls = () => {
    const hola = localStorage.getItem("mylist");
    if (user) {
      console.log("haciendo el get de urls y set el listurl");
    } else if (user === false || hola != null) {
      console.log(hola, "dentro");
      const initialValue = JSON.parse(hola);
      setListUrl(initialValue);
    }
  };

  useEffect(() => {
    managerUrls();
  }, []);
  console.log(useContext(AuthContext));
  return (
    <>
      <div className="container">
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

        {listUrl.length ? <ShortList url={listUrl}></ShortList> : null}
      </div>
    </>
  );
};

export default Main;
