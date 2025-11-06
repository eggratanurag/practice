import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router";
import UserCallBack from './pages/useCallback/index'
import UseMemo from './pages/useMemo'
import AgeCalculator from './pages/ageCalculator'
import Home from './pages/homePage'
import FetchAxios from './pages/fetchAxios'
import StrictMode from './pages/strictMode';
import DocumentVsWindow from './pages/documentVsWindow';
import Practice from './pages/practice';
import ToastPage from './pages/toast/index';
import MotionComponents from './pages/motionComponents/index';
import {Toast} from './components/toast/index';
import ParallaxEffect from './pages/parallaxEffect/index';
import MotionLayouts from './pages/motionLayouts/index';
import TextAnimation from "./pages/textAnimation/index"
import AnimateSequence from "./pages/animateSequence/index"
import ScrollBasedAnimation from "./pages/scrollBasedAnimation/index"
import NothingHero from "./pages/nothingHero/index"
import SilverButton from "./pages/silverButton/index"
import Protection from "./pages/protection/index"

const pages = [
  { path: '/', name: 'Home', element: <Home /> },

  { path: '/practice', name: 'Practice', element: <Practice /> },
  { path: '/useCallback', name: 'Use callback', element: <UserCallBack /> },
  { path: '/useMemo', name: 'Use Memo', element: <UseMemo /> },
  { path: '/ageCalculator', name: 'Age calculator', element: <AgeCalculator /> },
  { path: '/fetchAxios', name: 'Fetch Axios', element: <FetchAxios /> },
  { path: '/strictMode', name: 'strict Mode', element: <StrictMode /> },
  { path: '/docuementVsWindow', name: 'Document vs Window', element: <DocumentVsWindow /> },
  { path: '/toast', name: 'Toast', element: <ToastPage /> },
  
  { path: '/motionComponents', name: 'Motion Components', element: <MotionComponents /> },
  { path: '/parallaxEffect', name: 'Parallax Effect', element: <ParallaxEffect /> },
  { path: '/motionLayouts', name: 'Motion Layouts', element: <MotionLayouts /> },
  { path: '/textAnimation', name: 'Text Animation', element: <TextAnimation /> },
  { path: '/animateSequence', name: 'Animate Sequence', element: <AnimateSequence /> },
  { path: '/scrollBasedAnimation', name: 'Scroll Based Animation', element: <ScrollBasedAnimation /> },
  { path: '/nothingHero', name: 'Nothing Hero', element: <NothingHero /> },
  { path: '/silverButton', name: 'Silver Button', element: <SilverButton /> },
];


function App() {
  const navigate = useNavigate()
  const pathName = useLocation().pathname

  const handleAuth = useCallback(() => {
     const key = localStorage.getItem('key')
     if(!key && key !== "helloKitty" && pathName === "/") {
      navigate('/protection')
     } 
  }, [navigate])

  useEffect(() => {
    handleAuth()
  }, [])



  return (
    <>
      <Toast />
      <Routes>
        {pages.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
        <Route path={"/protection"} element={<Protection />} />
      </Routes>
    </>
  )
}

export default App
export {pages};

