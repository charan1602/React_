// import Buttons from "./buttons"
// import {useState} from  "react"
import styles from "./styles.module.css"
let css = {
    backgroundColor:"blue",
    color:"white"
}
const Functional_component = () => {
    return(
     
        
       <div className="func_div">
            <h1>functional component</h1>
            <h2 style={{color:"red"}}>This is inline CSS</h2>
            <h2 style={css}>This is internal CSS</h2>
            <h2 className="functional_external">This is External CSS</h2>
            <h2 className={styles.func_mod}>This is Module CSS</h2>
       </div>
    )
}
export default Functional_component