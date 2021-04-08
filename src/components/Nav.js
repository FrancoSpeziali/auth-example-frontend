import { useContext } from "react";
import { AppState } from "../App";
import { Link } from "react-router-dom";

export default function Navigation() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppState);

  const handleLogout = async () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
          <Link to="/details">Details</Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </>
  );
}
