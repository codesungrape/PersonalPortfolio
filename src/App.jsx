import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Project from './components/Projects/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Project title={"Project1"} description={"This a test that im trying to do to see if it works"} />
    </>
  )
}

export default App
