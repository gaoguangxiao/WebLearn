import React from "react";
import ReactDOM from "react-dom";

/**
 * 跨组件之间的通讯
 */

// 创建React.createContext得到两个组件,Provider提供数据、Consumer消费者
// 使用Provider作为父结点
// 设置vaue属性

const { Provider, Consumer } = React.createContext();

function A() {
  return(
    <div>
      this is A Component
    </div>
  )
}


function B() {
  return (
    <div>
      this is B Component
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
