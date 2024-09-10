 
 import {useState} from "react"
 const validAge = () =>{
    const [valid,setvalid]=useState(false)
    
        {
            if(valid){
               return <div>valid</div>
            }
            else{
             return   <div>not valid</div>
            }
        }

}
export default validAge