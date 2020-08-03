import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : 0
        }
    }

    handleResize = (e)=>{
        const newSize = e.target.value?parseInt(e.target.value):0;
        if(newSize !== this.state.size){
            this.setState({
                size : e.target.value?parseInt(e.target.value):0
            });
        }
    }
    render(){
        const initArray = [...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    GroupSize:
                    <input onBlur = {this.handleResize} defaultValue={0}/>
                </label>
                {initArray.map(key=><Counter key={key}/>)}
            </div>
        )
    }
}
export default CounterGroup