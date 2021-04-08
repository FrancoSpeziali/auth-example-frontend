import { createContext, useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Navigation from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const AppState = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("isLoggedIn")
  );

  return (
    <AppState.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <ProtectedRoute path="/details" exact component={Details} />
          </Switch>
        </Router>
      </div>
    </AppState.Provider>
  );
}

export default App;
