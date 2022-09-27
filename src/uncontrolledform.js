import React from 'react';

class Uncontroll extends React.Component{

    //creat a function handleClick
    handleClick=()=>{
        const name=this._name.value;
        alert("Hello",name)
        console.log(name)

    }

    render(){
        return(
            <div>
                <input type="text" ref={inputValue=>this._name=inputValue}
                placeholder="Enter Your Name"/>

                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        )
    }

}

export default Uncontroll;