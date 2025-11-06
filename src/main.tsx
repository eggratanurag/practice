import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {LocalContextProvider} from './context/index.tsx';


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <LocalContextProvider>
    <App />
  </LocalContextProvider>
  // </StrictMode>,
)
