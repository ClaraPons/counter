import React from "react";
import "./Counter.css"

class Counter extends React.Component {
    render (){
        return (
            <div className="counterContainer">
                <h2>{this.props.count}</h2>
                <div className="buttonContainer">
                    <button style={{backgroundColor:"green"}} onClick={this.props.increment}> + </button>
                    <button style={{backgroundColor:"red"}} onClick={this.props.substract}> - </button>
                </div>
            </div>
        )
    }
}

export default Counter