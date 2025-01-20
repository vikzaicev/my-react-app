import { useState } from 'react'
import './App.css'
import { BlockInfo } from './compponents/BlockInfo/BlockInfo'
import { Slider } from './compponents/slider/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlockInfo />
      <Slider />

    </>
  )
}

export default App
