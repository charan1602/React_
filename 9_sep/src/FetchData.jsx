import { useState, useEffect } from 'react'
import axios from "axios"


const FetchData = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        const dataFetching = async () => {
            const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            console.log(data)
            setdata(dataFetching.data)

        }
    },[])
    return (
    <div>
        <ul>

        </ul>
    </div>
    )
}
export default FetchData