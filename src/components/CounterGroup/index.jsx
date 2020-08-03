import React from 'react'
import Counter from '../Counter'
import { configureStore } from '@reduxjs/toolkit'

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : 0,
            totalNumber: 0
        }
    }

     counterReducer = (state = this.state, action) =>{
      // Check to see if the reducer cares about this action
      if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
          ...state,
          // and update the copy with the new value
          totalNumber: state.totalNumber + 1,
          size: state.size
        }
      }else if(action.type ==='counter/decrement'){
        return {
                  ...state,
                  // and update the copy with the new value
                  totalNumber: state.totalNumber + 1,
                  size: state.size
                }
      }else if(action.type === 'counter/resize'){
          return { ...state,
                  // and update the copy with the new value
                  totalNumber: 0,
                  size: state.size
                  }
      }
      // otherwise return the existing state unchanged
      return state
    }
    handleResize = (e)=>{
        const newSize = e.target.value?parseInt(e.target.value):0;
        if(newSize !== this.state.size){
            this.setState({
                size : e.target.value?parseInt(e.target.value):0,
            });
            this.store.dispatch({ type: 'counter/resize' });
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
        const store = configureStore({ reducer: this.counterReducer })
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
                {initArray.map(key=><Counter size={this.state.size} store = {this.store} key={key}/>)}
            </div>
        )
    }
}
export default CounterGroup