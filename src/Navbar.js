import React from 'react';
import logo from "./logo.svg";
import {links} from "./data";

const Navbar=()=>{

    const handleClick=(e)=>{
        e.PreventDefault();//it is used to prevent the default submission

        //targeting link to navigate to particular page
        const target=e.target.getAttribute("href");
        const location=document.querySelector(target).offsetTop

        window.scrollTo({
            left:0,
            top:location-64
        })

    }


    return(
        <nav className="navbar sticky">
            <div className="nav-center">
               <img src={logo} alt="smooth scroll" /> 
               <div>
                {links.map((link)=>{
                    return(
                    <a href={link.url}  key={link.id} onClick={handleClick}>
                        {link.text}
                    </a>
                    )
                })}
               </div>
            </div>
        </nav>
    )
}

export default Navbar;