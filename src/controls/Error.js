import React, { Component } from 'react';
import PropTypes from "prop-types";

class Error extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               {this.props.isShown && this.props.message}
            </div>
        );
    }
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
    isShown: PropTypes.bool
};

export default Error;