import { useState } from 'react'
const Form = ()=>{
    const [name,setname]=useState("")
    const handleChange = (e)=>{
        setname(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default Form