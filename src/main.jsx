import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Main from './Layout/Main';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Main></Main>} />
       
       

    
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
