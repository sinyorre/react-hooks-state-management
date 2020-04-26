import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from "./store/store";
import reducer from "./reducer/reducer";


function StartApp() {
  // create a global store to store the state
  const globalStore = useContext(Store);

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore)

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <App />
    </Store.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<StartApp />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
