import { useRef } from 'react'
const Uncontrolled = ()=>{
    const inputRef = useRef(null)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`${inputRef.current.value}`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" ref={inputRef} />
                </label>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default Uncontrolled 