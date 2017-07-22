import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Form.less';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form method="POST" action="">
          <fieldset>
            {this.props.children}
            <input type="submit" value="login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node

};

export default Form;