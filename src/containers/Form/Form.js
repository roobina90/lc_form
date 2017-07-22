import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Form.less';
import Field from "../../controls/Field";
import Checkbox from "../../controls/Checkbox";
import {isEmailValid, isPasswordValid} from  "../../validation/formValidation";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInputChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  // handleSubmit(evt) {
  //   console.log(this.state);
  //   evt.preventDefault();
  // }

  render() {
    return (
      <div>
        <form method="POST" action="" onSubmit={this.props.handleSubmit}>
          <fieldset>
            <Field name="email" type="text" label="E-mail" onChange={this.handleInputChange} value={this.state.email} validation={isEmailValid}/>
            <Field name="password" type="password" label="Hasło" onChange={this.handleInputChange} value={this.state.password} validation={isPasswordValid} />
            <Checkbox name="remember" label="Zapamiętaj mnie" onChange={this.handleInputChange} value={this.state.remember} />
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired

};

export default Form;