import { useState } from 'react'
import './App.css'
import Form from './Form'
import Uncontrolled from './Uncontrolled'
import Forms from './Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button>Add the Task</button>
     {/* <Form />
     <Uncontrolled /> */}
     <Forms />
    </>
  )
}

export default App
