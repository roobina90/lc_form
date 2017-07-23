import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Checkbox.less';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.props.onChange(this.props.name, evt.target.checked);
        //this.setState({ value: !this.state.value });
        //console.log(evt.target.checked);
        //evt.preventDefault();
    }
    render() {
        return (
            <div>
                <input name={this.props.name} type="checkbox" onChange={this.handleChange} checked={this.props.value} />
                <label htmlFor={this.props.name}>{this.props.label}:</label>
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