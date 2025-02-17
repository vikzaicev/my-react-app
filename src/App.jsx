import { useState } from 'react'
import './App.css'
import { BlockInfo } from './compponents/BlockInfo/BlockInfo'
import { Slider } from './compponents/slider/Slider'
import { IsDark } from './compponents/IsDark/IsDark'
import { Wrapper } from './compponents/Wrapper/Wrapper'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlockInfo />
      <Slider />

      <Wrapper>
        <IsDark />
      </Wrapper>

    </>
  )
}

export default App
