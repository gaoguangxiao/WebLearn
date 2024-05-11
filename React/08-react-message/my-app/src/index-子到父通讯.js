import React from "react";
import ReactDOM from "react-dom";

/**
 * 子组件传递数据到父组件
 */

class Parent extends React.Component {
  state = {
    parentMsg:''
  }
  // 定义回调函数
  getChildMsg = (data) => {
    console.log("data", data);
    this.setState({
      parentMsg:data
    })
  };

  render() {
    return (
      <div className="parent">
        父组件: {this.state.parentMsg} <Child getMsg={this.getChildMsg} />
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    msg: "开汽车",
  };

  handClick = () => {
    // console.log("this.props", this.props);
    this.props.getMsg(this.state.msg);
    // props.name(this.state.msg)
  };

  render() {
    return (
      <div className="child">
        <button onClick={this.handClick}>子组件：点我向父组件传递数据</button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
