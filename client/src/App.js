import "./App.css";
import Login from "./components";
import SignUp from "./components/signup";
import Copyright from "./components/utils/Copyright";
import Dashboard from "./components/main";
import NotFound from "./components/not-found";
import Navbar from "./components/utils/Navbar";
import MyAccount from "./components/my-account/";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Login copyright={Copyright} />}
          />
          <Route
            path="/signup"
            exact
            render={(props) => <SignUp copyright={Copyright} />}
          />
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard copyright={Copyright} />}
          />
          <Route
            path="/my-account"
            exact
            render={(props) => (
              <>
                <Navbar />
                <MyAccount />
                <Copyright />
              </>
            )}
          />
          <Route
            render={(props) => (
              <>
                <NotFound />
                <Copyright />
              </>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
