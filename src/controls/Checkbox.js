import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Checkbox.less';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ value: !this.state.value });
        //console.log(evt.target.checked);
        //evt.preventDefault();
    }
    render() {
        return (
            <div>
                <input name={this.props.name} type="checkbox" onChange={this.handleChange} checked={this.state.value} />
                <label htmlFor={this.props.name}>{this.props.label}:</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
};

export default Checkbox;