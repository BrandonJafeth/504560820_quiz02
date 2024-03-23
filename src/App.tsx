import { useContext, useEffect, useState } from 'react'
import './App.css'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { MyProvider } from './context/MyContextProvider'

function App() {



  
  return (
    <>
    <MyProvider>
    <h1>Quiz 02</h1>
    <Stepper/>
       <Content/>
     
    </MyProvider>
  
    </>
  )
}

export default App
