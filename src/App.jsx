import { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import { BlockInfo } from './compponents/BlockInfo/BlockInfo'
import { Slider } from './compponents/slider/Slider'
import { IsDark } from './compponents/IsDark/IsDark'
import { Wrapper } from './compponents/Wrapper/Wrapper'
import { Btn } from './compponents/Layout/Btn'
import { Nav } from './compponents/Nav/Nav'
import { Layout } from './compponents/Layout/Layout';



function App() {
  const [count, setCount] = useState(0)
  const onClickHandler = (event) => {
    console.log("55");
  }


  return (

    <BrowserRouter>
      <Layout />



      {/* 
      <Wrapper>
        <IsDark />
      </Wrapper> */}
      <Btn onClick={onClickHandler} >Кнопка</Btn>
    </BrowserRouter>



  )
}

export default App
