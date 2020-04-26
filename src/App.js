import React, {useContext} from 'react';
import './App.css';
import Store from './store/store'

function App() {
  const { state, dispatch } = useContext(Store);
  
  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: "todo 1" });
  }
  
  return (
    <div className="App">
       <h1>Hello World</h1>
       <ul>
        {state.todos.map(todo => (
          <li>{todo}</li>
        ))}
       </ul>
       <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}

export default App;
