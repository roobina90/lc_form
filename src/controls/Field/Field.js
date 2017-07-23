import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Field.less';
//import Error from '../Error/Error';


class Field extends Component {
    constructor(props) {
        super(props);
        this.state = { label: this.props.label };
        this.handleChange = this.handleChange.bind(this);
        this.hidePlaceholder = this.hidePlaceholder.bind(this);
        this.showPlaceholder = this.showPlaceholder.bind(this);
    }
    hidePlaceholder() {
        this.setState({ label: "" });
    }

    showPlaceholder() {
        this.setState({ label: this.props.label });
    }

    handleChange(evt) {
        this.props.onChange(this.props.name, evt.target.value);
        evt.preventDefault();
    }
    render() {
        return (
            <p className={"lc-field lc-field--" + this.props.name}>
                <input className="lc-field-input" onFocus={this.hidePlaceholder} onBlur={this.showPlaceholder} placeholder={this.state.label} type={this.props.type} name={this.props.name} onChange={this.handleChange} value={this.props.value} />
            </p>
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