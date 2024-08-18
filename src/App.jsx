import React from 'react'
import './App.css'
import useScrollToTop from './Components/CustomHook/useScrollToTop ';
import Header from './Components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/layout/Footer'

const App = () => {
  useScrollToTop();
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <Header />
        </div>
        <div className='pb-20'>
          <Outlet />
        </div>
        <div>
          < Footer />
        </div>

      </div>


    </>
  )
}

export default App