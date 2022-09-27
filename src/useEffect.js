
import React, { useEffect, useState } from 'react';


const UseEffecthook=()=>{

    const [value,setvalue]=useState(0);
    const [data,setData]=useState(0);

    //useeffect 
    useEffect(()=>{
        setInterval(() => {
            setData((count)=>count*2)
        }, 1000);
       
    },[])

console.log("rendering componenet")

    return(
        <>
            <h1>{data}</h1>

            <button className='btn' onClick={()=>setData(data+1)}>
                Click 
            </button>
        </>
    )

}


export default UseEffecthook;