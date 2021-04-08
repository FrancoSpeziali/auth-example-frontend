import { createContext, useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import Navigation from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/details" exact component={Details} />
        </Router>
      </div>
    </AppState.Provider>
  );
}

export default App;
