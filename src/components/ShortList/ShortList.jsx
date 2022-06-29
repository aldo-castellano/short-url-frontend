import { useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CSSTransition } from "react-transition-group";

const ShortList = ({ url }) => {
  const [copy, setCopy] = useState(false);
  const copySuccessful = useRef(null);
  const nodeRef = useRef();
  const hadleCopy = () => {
    setCopy(true);
    copySuccessful.current.classList.add("show-copy-successful");
    setTimeout(() => {
      copySuccessful.current.classList.remove("show-copy-successful");
    }, 1000);
  };

  return (
    <>
      <div>
        <CSSTransition
          nodeRef={nodeRef}
          in={true}
          timeout={600}
          appear={true}
          classNames="transitions"
        >
          <div ref={nodeRef} className=" your-shorter ">
            <div className="your-shorter-tittle">
              <h2>your cuts</h2>
            </div>
            {url.map((item, key) => {
              return (
                <div className="container-item-short" key={key}>
                  <div ref={copySuccessful} className="copy-successful">
                    <p>successful copy</p>
                  </div>

                  <div className="item-short ">
                    {copy ? (
                      <span className="copy-on copy-ligth"></span>
                    ) : (
                      <span className="copy-off copy-ligth"></span>
                    )}
                    <div className="item-url">
                      <p>{item.original}</p>

                      <a href={item.short} target="_blank" rel="noreferrer">
                        {item.short}
                      </a>
                    </div>
                    <CopyToClipboard text={item.short} onCopy={hadleCopy}>
                      <button className="button button-copy">copy</button>
                    </CopyToClipboard>
                  </div>
                </div>
              );
            })}
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
export default ShortList;
