import React from "react";
import ReactDOM from "react-dom";

/**
 * 兄弟组件之间的通讯
 */

class Counter extends React.Component {
  state = {
    count: 1,
  };

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="parent">
        <div>
          <Child1 name={this.state.count}></Child1>
          <Child2 onIncrement={this.onIncrement}></Child2>
        </div>
      </div>
    );
  }
}

class Child1 extends React.Component {
  render() {
    console.log("Child1_props", this.props.name);

    return (
      <div className="child1">
        <button onClick={this.handClick}>计数器的值：{this.props.name}</button>
      </div>
    );
  }
}

class Child2 extends React.Component {
  handClick = () => {
    // console.log('props', this.props)
    this.props.onIncrement(); 
  };

  render() {
    return (
      <div className="child2">
        <button onClick={this.handClick}>计数器增加数值+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
