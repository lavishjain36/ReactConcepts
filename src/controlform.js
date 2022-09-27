import React from 'react';


class ControllForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
             name:"",
        };
    }

    //function to manage the state of the input field
        handleChange=(event)=>{
            this.setState({name:event.target.value})
        }


    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}
                placeholder="Enter user Name"/>
                <h1>{this.state.name}</h1>
            </div>
        )

    }

}


export default ControllForm;