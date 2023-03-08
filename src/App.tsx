import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>EJ SADIARIN LIBRARY APP</h1>
     <button onClick={num => setCount(num + 1)}> Count is {count} </button>
    </div>
  );
}

export default App;
