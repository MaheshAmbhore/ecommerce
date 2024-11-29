import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        const product = data.find(p=> p.id == id)
        setData(product)
    })
    .catch(error => console.error("Error", error))
  },[id])
  

  return (
    
    <div className="p-4 text-center border-2 w-1/2 m-auto mt-4 rounded-md bg-yellow-50 ">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <hr/>
      <br/>
      <div className='flex justify-between m-auto'>
        <div className='text-start'>
            <p className=""><b>Product Name:</b> {data?.name}</p>
            <p><b>Description: </b>{data?.description}</p>
        </div>
        <div className='text-start'>
            <p><b>Price:</b> {data?.price}&#8377;</p>
            <button className="border-2 bg-gray-200 text-sm rounded-md p-0 m-auto text-lime-800"><b className='m-auto p-1'>Add to Cart</b></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;