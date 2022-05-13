import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortList = ({ url }) => {
  const [copy, setCopy] = useState(false);

  return (
    <>
      <div className=" your-shorter ">
        <div className="your-shorter-tittle">
          <h2>your cuts</h2>
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
          <CopyToClipboard text={url.short} onCopy={() => setCopy(true)}>
            <button className="button button-copy">copy</button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};
export default ShortList;
