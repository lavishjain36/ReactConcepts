import React, { useState } from 'react'


 const Usestateobject=()=>{
    //creating hooks and passing object data 
    
     const [person,setperson]=useState({
        name:"Mahesh",
        age:"22",
        message:"Hi Folks"
     })

   //funtion to update the data with setPerson args
     const changeMessage=()=>{
        setperson({...person,age:"23",})
     }


     return(
        //React Fragment if we have more than one line  
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3> 
            <h4>{person.message}</h4>
            <button className="btn" onClick={changeMessage}>
                Change message
            </button>
        </>
     )
 }


 export default Usestateobject;