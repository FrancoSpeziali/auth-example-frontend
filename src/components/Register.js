export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

    const response = await fetch("http://localhost:3002/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email"></input>
        <input name="password" type="password"></input>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
