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
const remove =( (removeitemindex)=>{
  setobj((item)=>{
    item.filter((_,ind)=>{ind!=removeitemindex})})
  })

console.log(obj)
  return (
    <>
    
    {/* <Todoitem /> */}
    <Todo input={input} setinput={setinput} additem={additem} />
    
    {
      obj.map((item,index)=>{
       return(
        <Todoitem
        title={item.title}
        description={item.description}
        ind = {index}
        remove={remove}
      />
       )
      })
    }
    </>
  )
}

export default App
