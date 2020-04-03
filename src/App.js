import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import "./App.css";
import store from "./store";
import { SET_CURRENT_USER } from "./actions/types";
import PrivateRoute from "./components/common/PrivateRoute";
import LandingPage from "./components/LandingPage";
import Post from "./components/Post";
import Header from "./components/Header";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import AboutPage from "./components/AboutPage";
import UpdatePost from "./components/UpdatePost";
import InsertPost from "./components/InsertPost";
import { setAuthToken } from "./utils";
import Feeds from "./components/Feeds";
import TeamProfile from "./components/TeamProfile";
import ContactUs from "./components/ContactUs";

const history = createBrowserHistory();

function App() {
  useEffect(() => {
    // when website loaded
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setAuthToken(token);
      const decodedToken = jwt_decode(token);
      store.dispatch({
        type: SET_CURRENT_USER,
        payload: decodedToken
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header />
          <div className="body">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/feeds" component={Feeds} />
            <Route exact path="/teams" component={TeamProfile} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contactus" component={ContactUs} />
            <Switch>
              <PrivateRoute exact path="/admin" component={AdminPage} />
              <PrivateRoute exact path="/insert" component={InsertPost} />
              <PrivateRoute exact path="/update/:id" component={UpdatePost} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
