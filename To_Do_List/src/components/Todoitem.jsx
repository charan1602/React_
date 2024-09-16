const Todoitem = ({title, description, delFun, id})=>{
    return(
        <>
          <div className="item">
           <h2>Task:{title}</h2>  
           <p>Description:{description}</p>
           <div className="btn_div">
                <button >Edit</button>
                <button onClick={() => delFun(id)}>Delete</button>
           </div>
          </div>          
        </>
    )
}
export default Todoitem