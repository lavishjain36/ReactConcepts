import React, { useState } from 'react';
import {data} from "./data";

const Usestatearray=()=>{
//create a hooks here 
const [people,setPeople]=useState(data);//create initial 

const removeItem=(id)=>{
  let newPeople=people.filter((person)=>person.id!==id);
  setPeople(newPeople);
};
return(
    <>
    {people.map((person)=>{
        const {id,name,age}=person;//Object destructing 
        return(
            <div key={id} className="item">
                <h1>{id}</h1>
                <h4>{name}</h4>
                <h3>{age}</h3>
                <button onClick={()=>removeItem(id)}>remove</button>
            </div>
        )
    })}
    <button className='btn' onClick={()=>setPeople([])}>Clear Item</button>

    </>
)
}

export default Usestatearray;