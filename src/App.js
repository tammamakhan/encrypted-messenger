import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
