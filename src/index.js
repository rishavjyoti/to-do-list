import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";

import './index.css';

import Store from "./context";
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import TodoHeader from "./components/Header.js";
import TodoListHeader from "./components/ListHeader";
import TodoList from "./components/List";
import TodoForm from "./components/Form";

import './fonts/PTSans-Regular.ttf'


function App() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <div>
      <TodoHeader/>
      <TodoForm />
      <TodoListHeader/>
      <TodoList />
      </div>
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);