import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  const [boxes,setboxes] = useState([])
  // const []
   const add_func = () => {
       setboxes([...boxes,boxes.length+1])
   }
   console.log(boxes)

  return (
    <>
     <button onClick={add_func}>Add Box</button>
      <div>
        {
          // <Box />
          
          boxes.map(()=>{
              <Box 
              
              />
          })
        }
      </div>

    </>
  )
}

export default App
