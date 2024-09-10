import { useState } from 'react'
import './App.css'
import './styles.module.css'
import Buttons from './buttons'
import Functional_component from './functional_component'
import Class_component from './class_component'

function App() {
  const [button1_state,setbutton1_state] = useState(false)
  const [button2_state,setbutton2_state] = useState(false)
 
  let event1 = ()=>{
    // console.log("function displayed")
       setbutton1_state(!button1_state)
  }
  let event2 = ()=>{
       setbutton2_state(!button2_state)
      //  console.log(button2_state)
  }
  
  return (
    <div>
    <Buttons funcDisplay = {event1}
            classDispay = {event2}
    />
    <div className='comp'>
      {button1_state &&  <Functional_component />}
      {button2_state && <Class_component />}
    
    </div>
    </div>
  )
}

export default App
