import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = ()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("Error fatching data:", error))
    },[])
   console.log(data);
    

    return(
        <div className="w-1/3 m-auto">
            <h1 className="text-2xl font-bold m-auto text-center mt-3 mb-3">Products</h1>
            {data.map((data)=>(
                <div className="flex justify-between h-10 w-50% border-2 border-gray-500 rounded-md m-1 p-1 bg-blue-50">
                    <p>Name: {data.name}</p>
                    <p>Price: {data.price}&#8377;</p>
                    <Link to={`/product/${data.id}`} >
                        <button className="border-2 bg-gray-200 text-sm rounded-md p-0 m-auto">View Details</button>
                    </Link>
                    
                </div>
            ))}
        </div>
    )
} 

export default HomePage;