import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Error from "./views/Error";
import managerUrl from "./helper/managerUrl";
import shortid from "shortid";
const pathName = window.location.pathname;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {shortid.isValid(pathName.slice(1)) ? (
          managerUrl(pathName.slice(1))
        ) : (
          <Route path="/*" element={<Error />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
