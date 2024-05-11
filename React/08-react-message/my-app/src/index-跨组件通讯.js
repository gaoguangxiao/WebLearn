import React from "react";
import ReactDOM from "react-dom";

/**
 * 跨组件之间的通讯
 */

// 创建React.createContext得到两个组件,Provider提供数据、Consumer消费者
// 使用Provider作为父结点
// 设置vaue属性

const { Provider, Consumer } = React.createContext();

class App extends React.Component {
  render() {
    return (
      <Provider value="pink">
        <div className="app">
          父结点
          <Node></Node>
        </div>
      </Provider>
    );
  }
}

const Node = (props) => {
  return (
    <div className="node">
      <SubNode></SubNode>
    </div>
  );
};

const SubNode = (props) => {
  return (
    <div className="subNode">
      <Child></Child>
    </div>
  );
};

const Child = (props) => {
  return (
    <div className="child">
      <Consumer>{(data) => <span>我是子节点 {data} </span>}</Consumer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
