import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "./state";

import "./App.css";
import Login from "./components";
import SignUp from "./components/signup";
import Copyright from "./components/utils/Copyright";
import Dashboard from "./components/main";
import NotFound from "./components/not-found";
import Navbar from "./components/utils/Navbar";
import MyAccount from "./components/my-account/";
import MainLoader from "./components/loading/MainLoader";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const { loadUser } = bindActionCreators(authActions, dispatch);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Login />
              </>
            )}
          />
          <Route path="/signup" exact render={() => <SignUp />} />
          <Route path="/loading" exact render={() => <MainLoader />} />
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" exact render={() => <Dashboard />} />
              <Route
                path="/my-account"
                exact
                render={() => (
                  <>
                    <Navbar />
                    <MyAccount />
                    <Copyright />
                  </>
                )}
              />
            </>
          ) : (
            <Redirect to="/loading" />
          )}
          <Route
            render={() => (
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
