import React, { Component } from 'react';
import PropTypes from "prop-types";
import Form from "./Form/Form";


class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.authorizeUser = this.authorizeUser.bind(this);
  }
  authorizeUser() {

  }


  render() {
    return (
      <div>
        <h1>LiveChat Form</h1>
        <Form handleSubmit={this.authorizeUser} />
      </div>
    );
  }
}

Root.propTypes = {

};

export default Root;