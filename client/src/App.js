import "./App.css";
import Login from "./components";
import SignUp from "./components/signup";
import MainView from "./components/main";
import Navbar from "./components/utils/Navbar";
import Copyright from "./components/utils/Copyright";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={(props) => <Login />} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={MainView} />
      </div>
    </Router>
  );
}

export default App;
