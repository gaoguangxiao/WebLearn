import React from "react";
import ReactDOM from "react-dom";

// 函数组件又叫做无状态组件，类组件又叫有状态组件

// 状态是私有的，只能在组件内部使用
// 通过this.state获取
class Hello extends React.Component {
//   state = {
//     count: 0,
//   };

  constructor() {
    super();

    // state的值是对象，表示一个组件中可以有多个数据
    this.state = {
        count: 1
    }

    // this.handclick = this.handclick.bind(this);
  }

//  3、推荐c 实例函数改为箭头函数可用于绑定this
  handclick = () => {
    // console.log('handclick')
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    // 获取状态this.state.xxx
    return (
      <div>
        <h1>计数器:{this.state.count}</h1>

        {/* 1、报错 this未定义 */}
        {/* <button onClick={this.handclick}>计数器加1</button> */}

        {/* 2、使用箭头函数可解决，箭头函数自身不绑定this，render中的this为组件实例，可以获取到setSate() */}
        {/* <button onClick={()=> this.handclick()}>计数器加1</button> */}

        {/* 3、使用Function.prototype.bind()中 */}
        <button onClick={this.handclick}>计数器加1</button>

        {/* 可通过this.state修改数值 */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          计数器加1
        </button> */}
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
