import "./App.css"
const Buttons = ({funcDisplay, classDispay}) => {
     return(
     <div className="buttons">
        <button onClick={funcDisplay}>this is func_component button</button>
        <button onClick={classDispay}>this is class_component button</button>
     </div>
     )
}
export default Buttons