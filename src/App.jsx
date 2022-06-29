import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import Login from "./routes/Login";
import Error from "./routes/Error";
import shortid from "shortid";
import Singin from "./routes/Singin";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route exac path="/singin" element={<Singin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
