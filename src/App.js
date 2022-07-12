import React from "react";
import "./App.css"
import Counter from "./components/Counter"

class App extends React.Component {
  constructor () {
      super()

      this.state = {
        countOne: 90,
        countTwo:90
      }

  }

  handleClickMin = (e) => {
    console.log(this.state.countOne)
    if(this.state.countOne > 0){ 
      this.setState({
        countOne: this.state.countOne - 1
    })
  }
  }

  handleClickMax = (e) => {
  if(this.state.countOne !== 100){
    if(this.state.countOne < this.state.countTwo){
      this.setState({
        countOne: this.state.countOne + 1
      })
    }else if(this.state.countOne === this.state.countTwo){
      this.setState({
        countOne: this.state.countOne + 1,
        countTwo: this.state.countTwo + 1
      })
    }
  }
}

handleClickMin2 = (e) => {
  console.log(this.state.countTwo)
  if(this.state.countTwo > 0){ 
    this.setState({
      countTwo: this.state.countTwo - 1
  })
 if(this.state.countTwo === this.state.countOne){
  this.setState({
    countOne: this.state.countOne - 1,
    countTwo: this.state.countTwo - 1
    })
    }
  }
}

handleClickMax2 = (e) => {
  if(this.state.countTwo !== 100){
  this.setState({
    countTwo: this.state.countTwo + 1
  })
}
}

    render() {
      return (
        <div className="counterGlobal">
          <h1>Counter</h1>
          <Counter
          count = {this.state.countOne}
          increment = {this.handleClickMax}
          substract = {this.handleClickMin}
          />
           <Counter
          count = {this.state.countTwo}
          increment = {this.handleClickMax2}
          substract = {this.handleClickMin2}
          />
        </div>
      )
    }
  }

export default App;




