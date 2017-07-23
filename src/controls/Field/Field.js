import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Field.less';
//import Error from '../Error/Error';


class Field extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.props.onChange(this.props.name, evt.target.value);
        evt.preventDefault();
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <input onBlur={this.onBlur} type={this.props.type} name={this.props.name} onChange={this.handleChange} value={this.props.value} />
            </div>
        );
    }
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Field;