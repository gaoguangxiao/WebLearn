import React from "react";
import ReactDOM from "react-dom";

/**
 * 父组件传递数据到子组件
*/

// 父组件定义state数据
// 给子组件标签添加属性，值为state的值
// 子组件通过props接受父组件攒传递的数据
class Parent extends React.Component {
  state = {
    lastName: "王",
  };

  render() {
    return (
      <div className="parent">
        父组件:
        <Child name={this.state.lastName} />
      </div>
    );
  }
}

const Child = (props) => {
  console.log("props：", props.name);
  return (
    <div>
      <p>子组件，接受父组件的数据:{props.name}</p>
    </div>
  );
};
ReactDOM.render(<Parent />, document.getElementById("root"));
