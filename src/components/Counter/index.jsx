import React from 'react'
 
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        }
    }

    render(){
        return(
        <div>
            <button>-</button>
            <mark>{this.state.value}</mark>
            <button>+</button>
        </div>);
    }

}
export default Counter
