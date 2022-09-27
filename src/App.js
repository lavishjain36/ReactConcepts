// import React from 'react';
// import { useState } from 'react';


// function App(){
//   //created a hooks here 
//   const [user,setUser]=useState({name:"John Doe",age:20});
//   return(
//     <div>
//     <Navbar/>
//     <MainPage user={user}/>

//     </div>
//   )
// }

// export default App;

// //Navbar Component
// function Navbar(){
//   return <nav style={{background:"#10ADDE",color:"#fff"}}>Demo App</nav>
// }


// //MainPage Component
// function MainPage({user}){
//   return(
//     <div>
//       <h3>Main Page</h3>
//       <Content user={user} />
      
//     </div>
//   )
// }


// //Content Component
// function Content({user}){
//   return(
//     <div>
//       <Message user={user}/> 
//     </div>
//   )
// }




// //Message Component
// function Message({user}){
//   return(
//     <>
//     <p>Welcome, {user.name}</p>
//      <p> {user.age}</p>

//     </> 
//   )
  
// }



import React from 'react'
import PropDrilling from './PropDrilling'

function App() {
  return (
    <PropDrilling/>
  )
}

export default App