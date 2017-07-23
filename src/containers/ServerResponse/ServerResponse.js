import React, { Component } from 'react';
import PropTypes from "prop-types";
import './ServerResponse.less';

class ServerResponse extends Component {
  constructor(props) {
    super(props);
   //this.formContent = null;
  }

  render() {
    return (
      <div>
      {this.props.message}
      </div>
    );
  }
}

ServerResponse.propTypes = {
    message: PropTypes.string
};

export default ServerResponse;