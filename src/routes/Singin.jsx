import { useState } from "react";

const Singin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const hadleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const hadlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <>
      <h1>registrate</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="email" onChange={hadleEmail} required />
        <input type="password" onChange={hadlePassword} required />
        <button>registrarme</button>
      </form>
    </>
  );
};
export default Singin;
