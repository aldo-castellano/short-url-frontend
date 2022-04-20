import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Error from "./views/Error";
import validator from "validator";
import managerUrl from "./helper/managerUrl";

const App = () => {
  const pathName = window.location.pathname;
  validator.isUUID(pathName.slice(1)) && managerUrl();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
