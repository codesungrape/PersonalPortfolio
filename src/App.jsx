import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import SocialContainer from './components/Social/Social'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <SocialContainer /> 
    </>
  )
}

export default App
5