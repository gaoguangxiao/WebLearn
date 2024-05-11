import React from "react";
import ReactDOM from "react-dom";

/**
 * React事件绑定
 */

// on+事件名称={事件处理程序}

// class App extends React.Component {
//   handClick() {
//     console.log("单击事件触发");
//   }
//   render() {
//     return <button onClick={this.handClick}>点我</button>;
//   }
// }

// 函数组件绑定
// function App() {
//   function handClick() {
//     console.log("单击事件触发");
//   }

//   return <button onClick={handClick}>点我</button>;
// }


/**
 * 
 * 事件处理
*/
class App extends React.Component {
  handClick(e) {
    //e 事件对象
    e.preventDefault()
    console.log("单击事件触发");
  }
  render() {
    return <a href="https:www.baidu.com" onClick={this.handClick}>百度</a>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
