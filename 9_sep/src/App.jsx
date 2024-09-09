import { useState } from 'react'
import './App.css'
import FetchData from './FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <FetchData />
  </div>
     
  )
}

export default App
