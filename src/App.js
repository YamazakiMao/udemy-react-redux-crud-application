import React, {Component} from "react";


const App = () =>  (<Counter></Counter>)

class Counter extends Component {
  constructor(props){ //初期化処理
    super(props)
    this.state = {count: 0} //初期化時のstateが0
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count +1 })
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count -1 })
  }

  render(){
    return(
      <React.Fragment>
        <div>count: { this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
