import { useState } from 'react'
import './App.css'
import { BlockInfo } from './compponents/BlockInfo/BlockInfo'
import { Slider } from './compponents/slider/Slider'
import { IsDark } from './compponents/IsDark/IsDark'
import { Wrapper } from './compponents/Wrapper/Wrapper'
import { Btn } from './compponents/Btn/Btn'



function App() {
  const [count, setCount] = useState(0)
  const onClickHandler = (event) => {
    console.log("55");
  }


  return (
    <>
      <BlockInfo />
      <Slider />

      <Wrapper>
        <IsDark />
      </Wrapper>
      <Btn onClick={onClickHandler} >Кнопка</Btn>
    </>
  )
}

export default App
