import Login from "./components/Login";
import Register from "./components/Register";
import Details from "./components/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/details" exact component={Details} />
      </Router>
    </div>
  );
}

export default App;
