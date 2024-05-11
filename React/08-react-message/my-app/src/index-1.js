import React from "react";
import ReactDOM from "react-dom";

// 函数组件接受数据
// const Hello = (props) => {
//   console.log('props', props)
//   return (
//     <div>
//       <h1>标题 props:{props.name} </h1>
//     </div>
//   );
// };

// ReactDOM.render(<Hello name= 'jack'/>, document.getElementById("root"));

// 类组件

// props是只读对象，只能读取属性的值，无法修改对象
// 类组件中，如果实现构造函数，应该将props传递给super
class Hello extends React.Component {
  constructor(props){

    super(props)
   
    console.log("superprops", this.props);
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>
          {this.props.name}的年龄为{this.props.age} 
          {this.props.tag}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Hello name="jack" age="12" fn={() => console.log("这是一个函数") } tag={<p>这是一个p标签</p>} />,
  document.getElementById("root")
);
