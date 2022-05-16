import { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortList = ({ url }) => {
  const [copy, setCopy] = useState(false);
  const copySuccessful = useRef(null);

  const hadleCopy = () => {
    setCopy(true);
    copySuccessful.current.classList.add("show-copy-successful");
    setTimeout(() => {
      copySuccessful.current.classList.remove("show-copy-successful");
    }, 1000);
  };

  return (
    <>
      <div className=" your-shorter ">
        <div className="your-shorter-tittle">
          <h2>your cuts</h2>
        </div>{" "}
        <div className="container-item-short">
          <div ref={copySuccessful} className="copy-successful">
            <p>successful copy</p>
          </div>

          <div className="item-short">
            {copy ? (
              <span className="copy-on copy-ligth"></span>
            ) : (
              <span className="copy-off copy-ligth"></span>
            )}
            <div className="item-url">
              <p>{url.original}</p>

              <a target="_blank" rel="noreferrer" href={url.short}>
                {url.short}
              </a>
            </div>
            <CopyToClipboard text={url.short} onCopy={hadleCopy}>
              <button className="button button-copy">copy</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShortList;
