import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Field.less';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state= {
        value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
      this.setState({value: evt.target.value});
      evt.preventDefault();
  }
  render() {
    return (
      <div>
       <label htmlFor={this.props.name}>{this.props.label}:</label>
        <input type={this.props.type} name={this.props.name} onChange={this.handleChange} value={this.state.value} />
      </div>
    );
  }
}

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
};

export default Field;