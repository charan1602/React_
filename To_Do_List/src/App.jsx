import { useState } from 'react'
import './App.css'
import  Todoitem from "./components/Todoitem"
import Todo from './components/Todo'
function App() {
 
  const [obj,setobj]=useState([])
  const [input,setinput]=useState({
    title:"",
    description:""
})
const additem = (newitem)=>{
  setobj((prevobj)=>[...prevobj,newitem])
}

const delFun = (id) =>{
  setobj(obj.filter((item, index) => index !== id))
}


console.log(obj)
  return (
    <>
    
    {/* <Todoitem /> */}
    <div className='title'> <h2>MY LIST</h2></div>
    <div className='form_div'>
    <Todo input={input} setinput={setinput} additem={additem} />
    </div>
    
    <div className='boxes'>
    {
      obj.map((item,index)=>{
       return(
        <Todoitem
        title={item.title}
        description={item.description}
        key = {index}
        id = {index}
        delFun={delFun}
        // remove={remove}
      />
       )
      })
    }
    </div>
    </>
  )
}

export default App
