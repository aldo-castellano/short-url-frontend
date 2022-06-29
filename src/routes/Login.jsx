const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>inicia sesion</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" required />
        <input type="password" required />
        <button>iniciar sesion</button>
      </form>
    </>
  );
};
export default Login;
