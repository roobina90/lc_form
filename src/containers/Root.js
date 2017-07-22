import React, { Component } from 'react';
import PropTypes from "prop-types";
import Form from "./Form/Form";
import ServerResponse from "./ServerResponse";
import {validateEmailPassword, isTestUser} from  "../validation/formValidation";

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {formContent: null, isAuthorized: false, serverMessage: ""};
    this.authorizeUser = this.authorizeUser.bind(this);
  }

  authorizeUser(formContent) {
    this.setState({formContent: formContent});
    this.getMessage(formContent);
  }

  getMessage({email, password}) {
    //let {email, password} = this.state.formContent;
    let isTestUser2 = isTestUser(email,password);
    if(isTestUser2.test) {
      //todo: crap
      this.setState({isAuthorized: true, serverMessage: isTestUser2.message});
    } else {
      this.setState({serverMessage: validateEmailPassword(email, password).message});
    }
  }

  render() {
    return (
      <div>
        <h1>LiveChat Form</h1>
        {!this.state.isAuthorized && <Form handleSubmit={this.authorizeUser} />}
        {this.state.formContent != null && <ServerResponse message={this.state.serverMessage}/>}
      </div>
    );
  }
}

Root.propTypes = {

};

export default Root;