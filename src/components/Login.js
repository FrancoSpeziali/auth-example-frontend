import { useContext } from "react";

import { useHistory } from "react-router-dom";

import { AppState } from "../App";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppState);

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
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    window.localStorage.setItem("isLoggedIn", "isLoggedIn");
    window.localStorage.setItem("token", data.token);
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <p>User already logged in</p>
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input name="email" type="email"></input>
            <input name="password" type="password"></input>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </>
  );
}
