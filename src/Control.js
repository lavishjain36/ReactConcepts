import React, { useState } from "react";



//An arrow function 
const Control =()=>{

    //create a useState hooks
    const [firstName,setFirstName]=useState('')
    const [email,setEmail]=useState('');
    const [people,setPeople]=useState('');//to update and print the data from input


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName&&email){
            const person={id:new Date().getTime().toString(),firstName,email};
            console.log(person);
            setPeople((people)=>{
                return [...people, person];
            })
            setFirstName("");
            setEmail("");

        }else{
            console.log("Empty Values")
        }

    }


    return(

    <>
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div class="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input
                       type="text"
                       id="firstName"
                       name="firstName"
                       value={firstName}
                       onChange={(e)=>setFirstName(e.target.value)}
                       />
                </div>

                <div class="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                       type="email"
                       id="email"
                       name="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                </div>
                <button type="submit">Add Person</button>
            </form>
           
            {people.map((person,index)=>{
                const {id,firstName,email} = person;
                return(
                    <div className="item" key={id}>
                        <h2>{firstName}</h2>
                        <p>{email}</p>
                    </div>
                );
            })}
        
        </article>
 </>   
    )
}

export default Control;