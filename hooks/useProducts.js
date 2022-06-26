import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../API/Index';

export default function useProducts() {
    const [Items, setItems] = useState([]);
    console.log("***************************")
    useEffect(() => {
        async function fetchAllproduct(){
          await fetchProduct().then((res)=>{
            setItems(res.data.product);
          })
        }
        fetchAllproduct();
        console.log(Items);
        
      }, []);

  return Items;
}
