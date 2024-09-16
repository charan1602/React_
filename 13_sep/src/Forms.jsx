import {useState} from "react"
const Forms = ()=>{
    const [input,setinput]=useState({
        title:"",
        description:""
    })
    const handleChange = (e)=>{
        console.log(input)
        const {name,value} = e.target
        setinput((preval)=>(
            {...preval,[name]:value}
           
        ))
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault()
       
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