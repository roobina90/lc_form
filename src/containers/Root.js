import React, { Component } from 'react';
import PropTypes from "prop-types";
import Form from "./Form/Form";
import Field from "../controls/Field";
import Checkbox from "../controls/Checkbox";

class Root extends Component {
  render() {
    return (
      <div>
        <h1>LiveChat Form</h1>
        <Form>
        <Field name="email" type="text" label="E-mail" />
        <Field name="password" type="password" label="Hasło" />
        <Checkbox name="remember" label="Zapamiętaj mnie" />
        </Form>
      </div>
    );
  }
}

Root.propTypes = {
   
};

export default Root;