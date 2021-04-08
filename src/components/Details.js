import { useEffect, useState } from "react";

export default function Details() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    void (async function () {
      const response = await fetch("http://localhost:3002/user/details", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      setUserId(data.user);
    })();
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <p>Userid: {userId}</p>
    </>
  );
}
