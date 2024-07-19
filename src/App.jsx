import React from 'react'
import './App.css'
import useScrollToTop from './Components/CustomHook/useScrollToTop ';
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const App = () => {
  useScrollToTop();
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
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