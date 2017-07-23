import React, { Component } from 'react';
import PropTypes from "prop-types";
import './ServerResponse.less';

class ServerResponse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  <div className={"lc-serverResponse lc-serverResponse--"+ (this.props.isAuthorized ? "success" : "error")}>
        {this.props.message}
      </div>
    );
  }
}

ServerResponse.propTypes = {
    message: PropTypes.string.isRequired,
    isAuthorized: PropTypes.bool.isRequired
};

export default ServerResponse;