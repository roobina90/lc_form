import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Field.less';
import Error from './Error';


class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
            isDirty: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onBlur() {
        this.setState({ isDirty: true });
    }
    validate() {
        this.setState({ isValid: this.props.validation(this.props.value) });
    }
    handleChange(evt) {
        this.validate();
        this.props.onChange(this.props.name, evt.target.value);
        evt.preventDefault();
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.label}:</label>
                <input onBlur={this.onBlur} type={this.props.type} name={this.props.name} onChange={this.handleChange} value={this.props.value} />
                <Error message="" isShown={!this.state.isValid && this.state.isDirty} />

            </div>
        );
    }
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    validation: PropTypes.func.isRequired
};

export default Field;