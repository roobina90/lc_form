import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Form.less';
import Field from "../../controls/Field";
import Checkbox from "../../controls/Checkbox";
import {emailValidation} from  "../../validation/formValidation";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <div>
        <form method="POST" action="" onSubmit={this.handleSubmit}>
          <fieldset>
            <Field name="email" type="text" label="E-mail" onChange={this.handleInputChange} value={this.state.email} validation={emailValidation}/>
            <Field name="password" type="password" label="Hasło" onChange={this.handleInputChange} value={this.state.password} validation={emailValidation} />
            <Checkbox name="remember" label="Zapamiętaj mnie" onChange={this.handleInputChange} value={this.state.remember} />
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node

};

export default Form;