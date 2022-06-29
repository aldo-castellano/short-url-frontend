import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => {
  const nodeRef = React.useRef(null);
  const [transition, setTransition] = useState(false);
  const navigate = useNavigate();
  const hadleClick = () => {
    setTransition(!transition);
  };
  const handleLogIn = () => {
    setTransition(!transition);
    navigate("/login");
  };
  const handleSingin = () => {
    setTransition(!transition);
    navigate("/singin");
  };
  return (
    <>
      <div className="container-header container">
        <div className="header-logo">
          <h1 className="logo" onClick={() => navigate("./")}>
            shortener url
          </h1>
          <button className="button-profile " onClick={hadleClick}>
            <Icon icon="akar-icons:person" color="#ffc700" height="27" />
          </button>
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={transition}
          timeout={600}
          classNames="transitions"
          unmountOnExit
        >
          <div ref={nodeRef} className="header-log">
            <button className="button button-log" onClick={handleLogIn}>
              log in
            </button>
            <button className="button button-sing" onClick={handleSingin}>
              sing in
            </button>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
export default Header;
