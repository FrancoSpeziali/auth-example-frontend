export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3002/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // store the httpOnly cookie
      // or send the httpOnly cookie
      credentials: "include", // only for httpOnly cookie - frontend is expecting a httpOnly cookie
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email"></input>
        <input name="password" type="password"></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
