import React,{Component} from "react"
import styles from "./styles.module.css"
let css = {
    backgroundColor:"violet"
}
class Class_component extends Component{
    render(){
       return(
        <div className="class_div">
            <h1>class component</h1>
            <h2 style={{color:"aqua"}}>This is inline CSS</h2>
            <h2 style={css}> This is internal CSS</h2>
            <h2 className="class_external">This is External CSS</h2>
            <h2 className={styles.class_mod}>This is Module CSS</h2>
        </div>
       )
    }
}
export default Class_component