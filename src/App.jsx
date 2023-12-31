import { createContext, useState } from 'react'
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
import CentralHinjewadiBlog from './Components/CentralHinjewadiBlog';
import VivaCityDhanoriBlog from './Components/VivaCityDhanoriBlog';
import CourtyardBlog from './Components/CourtyardBlog';
import WestviewBlog from './Components/WestviewBlog';
import SportsvilleBlog from './Components/SportsvilleBlog';
import Thanks from './Components/Thanks';

export const ThanksContext= createContext()

function App() {
  const [thanksState, setThanksState] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <ThanksContext.Provider value={{thanksState, setThanksState}}>
      <Routes>
        <Route path="/" element={<AllHomeComponents/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path='/kohinoor_kaleido' element={<KaleidoBlog/>}/>
      <Route path="/kohinoordeveloper_group" element={<KohinoorGroupBlog/>}/>
      <Route path="/kohinoor_hinjewadi_central" element={<CentralHinjewadiBlog/>}/>
      <Route path='/kohinoor_vivacity_dhanori' element={<VivaCityDhanoriBlog/>}/>
      <Route path='/kohinoor_courtyard' element={<CourtyardBlog/>}/>
      <Route path='/kohinoor_sportsville' element={<SportsvilleBlog/>}/>
      <Route path='/kohinoor_westview_reserve' element={<WestviewBlog/>}/>
      <Route path="/thanks" element={<Thanks/>}/>
      </Routes>
      </ThanksContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
