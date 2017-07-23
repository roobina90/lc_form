import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Checkbox.less';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.props.onChange(this.props.name, !this.props.value);
    }
    render() {
        return (
            <div className="lc-checkbox" onClick={this.handleChange}>
                <input className="lc-checkbox-input" name={this.props.name} type="checkbox"  data-checked={this.props.value} checked={this.props.value} />
                <label className="lc-checkbox-label" htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired
};

export default Checkbox;