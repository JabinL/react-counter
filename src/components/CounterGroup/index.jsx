import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : 0,
            totalNumber: 0
        }
    }

    handleResize = (e)=>{
        const newSize = e.target.value?parseInt(e.target.value):0;
        if(newSize !== this.state.size){
            this.setState({
                size : e.target.value?parseInt(e.target.value):0,
                totalNumber:0
            });
        }
    }
    onIncrease = ()=>{
        this.setState((prevState)=>({
            totalNumber: prevState.totalNumber+1
        }));
    }

    onDecrease = ()=>{
        this.setState((prevState)=>({
            totalNumber: prevState.totalNumber -1
        }));
    }
    render(){
        const initArray = [...Array(this.state.size).keys()];
        return(
            <div>
                <label>
                    GroupSize:
                    <input onBlur = {this.handleResize} defaultValue={0}/>
                </label>
                <br/>
                <label>
                    Total number:{this.state.totalNumber}
                </label>
                {initArray.map(key=><Counter size={this.state.size}
                 onIncrease={this.onIncrease} onDecrease={this.onDecrease}key={key}/>)}
            </div>
        )
    }
}
export default CounterGroup