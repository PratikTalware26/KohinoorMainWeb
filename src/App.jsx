import { useState } from 'react'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Components/FormPopup.css"
import PrivacyPolicy from './Components/PrivacyPolicy';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllHomeComponents/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
