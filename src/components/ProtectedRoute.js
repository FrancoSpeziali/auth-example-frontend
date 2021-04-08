import { useContext } from "react";
import { AppState } from "../App";

import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { isLoggedIn } = useContext(AppState);

  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
}
