import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
      </div>
    );
  }
}

export default LoginForm;
