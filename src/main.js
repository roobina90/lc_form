import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import "./styles/normalize.less";
import "./styles/grid.less";
import "./styles/common.less";

render(<App />, document.getElementById('root'));
