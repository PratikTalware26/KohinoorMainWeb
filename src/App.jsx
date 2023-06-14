import { useState } from 'react'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AllHomeComponents/>
    </div>
  )
}

export default App
