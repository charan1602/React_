import {useState} from "react"
const Forms = ({input,setinput ,additem})=>{
   
    const handleChange = (e)=>{
        // console.log(input)
        const {name,value} = e.target
        setinput((preval)=>(
            {...preval,[name]:value}
           
        ))
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        additem(input)
       console.log(input)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            Title: 
            <input type="text" name="title" value={input.title} onChange={handleChange} />
            Description:
            <input type="text" name="description" value={input.description} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Forms