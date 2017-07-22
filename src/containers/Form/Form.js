import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Form.less';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node

};

export default Form;