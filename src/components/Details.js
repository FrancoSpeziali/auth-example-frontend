import { useEffect, useState, useContext } from "react";

import { AppState } from "../App";

export default function Details() {
  const [userId, setUserId] = useState("");
  const { setIsLoggedIn } = useContext(AppState);

  useEffect(() => {
    void (async function () {
      const response = await fetch("http://localhost:3002/user/details", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      setUserId(data.user);
      setIsLoggedIn(true);
    })();
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <p>Userid: {userId}</p>
    </>
  );
}
