// import { useState } from 'react'

import './App.css'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Controls from './assets/components/controls'
import SetUp from './assets/components/Setup'
import Timer from './assets/components/Timer'

function App() {

  return (
    <>
      <Header title = "Break Timer"></Header>

      <div className='w-5/10 m-auto border-3 bg-[#333333] rounded-3xl p-5 text-white'>
        <div className='w-9/10 h-[15vh] m-auto flex flex-row justify-center gap-5'>
          <SetUp id = "break-label" info = "Break:" style = "w-4/10 flex justify-center items-center border bg-blue-200 rounded-xl gap-2 p-2" length={90} ></SetUp>
          <SetUp id = "session-label" info = "Session:" style = "w-4/10 text-white flex justify-center items-center border bg-blue-600 rounded-xl gap-2 p-2" length={90} ></SetUp>
        </div>
        
        <div className='w-8/10 h-[20vh] m-auto mt-[5vh] flex flex-row justify-center items-center border rounded-3xl gap-5'>
          <Timer label = "label" count = {60}></Timer>
        </div>
      
        <div className='w-8/10 h-[10vh] m-auto mt-[5vh] flex flex-row justify-center gap-5'>
          <Controls style = "w-6/10 flex justify-center items-center border bg-blue-900 rounded-3xl gap-2"></Controls>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  )
}

export default App
