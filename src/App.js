import React, { Component } from 'react';
import './App.css';
import Todo from './component/container/Todo';
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store.createStore()} className="fluid-container">
        <Todo />
      </Provider>
    );
  }
}

export default App;
