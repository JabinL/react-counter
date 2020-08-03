import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }));
        this.props.onDecrease();
    }
    onIncrease = () => {
        this.setState((prevState) =>({
                value: prevState.value + 1
            })); 
        this.props.onIncrease();    
            
    }
    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrease}>+</button>
            </div>);
    }

}
export default Counter
