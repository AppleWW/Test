import React, { Component } from 'react';
import Count from './containers/Count';
import Person from './containers/Person';
import UseState from './components/useState.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
        <UseState />
      </div>
    );
  }
}
