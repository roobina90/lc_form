import React, { Component } from 'react';
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import Form from "../Form/Form";
import ServerResponse from "../ServerResponse/ServerResponse";
import { validateEmailPassword, isTestUser } from "./validation/formValidation";
import "./App.less";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { formContent: null, isAuthorized: (Cookies.get("user") === "test@test.pl"), serverMessage: "Hello!" };
    this.authorizeUser = this.authorizeUser.bind(this);
  }

  authorizeUser(formContent) {
    this.setState({ formContent: formContent });
    this.getMessage(formContent);
  }

  getMessage({email, password, remember}) {
    let isTestUser2 = isTestUser(email, password);
    if (isTestUser2.test) {
      if (remember) Cookies.set("user", email, { expires: 7 });
      this.setState({ isAuthorized: true, serverMessage: isTestUser2.message });
    } else {
      this.setState({ serverMessage: validateEmailPassword(email, password).message });
    }
  }

  render() {
    return (
      <div className="lc-app">
        <h1 className="lc-app-title">Login</h1>
        {!this.state.isAuthorized && <Form handleSubmit={this.authorizeUser} />}
        {(this.state.formContent != null || this.state.isAuthorized) && <ServerResponse isAuthorized={this.state.isAuthorized} message={this.state.serverMessage} />}
      </div>
    );
  }
}

Root.propTypes = {

};

export default Root;