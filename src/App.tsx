import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cats from './components/Cats'
import Dogs from './components/Dogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cats />
      <Dogs />
    </>
  )
}

export default App
