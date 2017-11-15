import React, { Component } from 'react';
import './App.css';
import Todo from './component/container/Todo'

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Todo />
      </div>
    );
  }
}

export default App;
