const Todoitem = ({title,description,ind,remove})=>{
    return(
        <>
          <div key={ind} id={ind}>
           <h2>Task:{title}</h2>  
           <p>Description:{description}</p>
           <div className="btn_div">
                <button >Edit</button>
                <button onClick={remove(ind)}>Delete</button>
           </div>
          </div>          
        </>
    )
}
export default Todoitem