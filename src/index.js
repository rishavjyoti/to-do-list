import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import {Stack} from '@fluentui/react';

import TodoHeader from "./components/Header.js";
import TodoListHeader from "./components/ListHeader";
import TodoList from "./components/List";
import TodoForm from "./components/Form";

function App() {
  // create a global store to store the state
  const store = createStore(rootReducer);
  initializeIcons();

  return (
    // State.Provider passes the state and dispatcher to the down
    <Provider store={ store }>
      <Stack gap="50">
        <Stack.Item style={{marginTop:"20px"}}>
          <TodoHeader/>
        </Stack.Item>
        <Stack.Item>
          <TodoForm />
        </Stack.Item>
        <Stack.Item>
          <TodoListHeader/>
        </Stack.Item>
        <Stack.Item>
          <TodoList />
        </Stack.Item>
      </Stack>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);