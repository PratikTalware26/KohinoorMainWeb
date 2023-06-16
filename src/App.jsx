import { useState } from 'react'
import './App.css'
import AllHomeComponents from './Components/AllHomeComponents'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Components/FormPopup.css"
import PrivacyPolicy from './Components/PrivacyPolicy';
import "./Components/BlogPages.css"
import KaleidoBlog from './Components/KaleidoBlog';
import KohinoorGroupBlog from './Components/KohinoorGroupBlog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllHomeComponents/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path='/kohinoor_kaleido' element={<KaleidoBlog/>}/>
      <Route path="/kohinoordeveloper_group" element={<KohinoorGroupBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
