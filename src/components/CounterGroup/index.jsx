import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : 0
        }
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    GroupSize:
                    <input defaultValue={0}/>
                </label>
                {initArray.map(key=><Counter key={key}/>)}
            </div>
        )
    }
}
export default CounterGroup