import { useState, useEffect } from 'react'
import axios from "axios"


const FetchData = () => {
    // const [data, setdata] = useState()
    const [data,setdata]=useState([])
    useEffect(() => {
        const dataFetching = async () => {
            const got_data = await axios.get("https://fakestoreapi.com/products")
            console.log(got_data.data)
            setdata(got_data.data)

        }
        dataFetching()
    },[])
    return (
    <div className='card'>
       {
      data.map((card)=>(
        <div key={card.id} >
            <img src={card.image} alt="image not found" />
            <h2>{card.title}</h2>
            <h3>{card.price}</h3>
            <p>{card.description}</p>
        </div>
      ))
}
    </div>
    )
}
export default FetchData