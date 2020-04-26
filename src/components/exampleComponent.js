import React, {useContext} from 'react';
import Store from '../store/store'

function ExampleComponent() {
  const { state, dispatch } = useContext(Store);
    
  return (
    <div className="App">
       <h1>Example Component</h1>
       <ul>
        {state.todos.map(todo => (
          <li>{todo}</li>
        ))}
       </ul>
    </div>
  );
}

export default ExampleComponent;