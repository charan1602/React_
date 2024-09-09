import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Cards = ({img,title})=>{
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="moshi mosh" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    {/* <p className="card-text">{bounty}</p> */}
    <a href="#" className="btn btn-primary">Moshi Mosh</a>
  </div>
</div>
    )
}
export default Cards