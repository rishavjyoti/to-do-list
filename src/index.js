import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

import TodoHeader from "./components/Header.js";
import TodoListHeader from "./components/ListHeader";
import TodoList from "./components/List";
import TodoForm from "./components/Form";

import './fonts/PTSans-Regular.ttf'


function App() {
  // create a global store to store the state
  const store = createStore(rootReducer);


  return (
    // State.Provider passes the state and dispatcher to the down
    <Provider store={ store }>
      <div>
      <TodoHeader/>
      <TodoForm />
      <TodoListHeader/>
      <TodoList />
      </div>
      </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);