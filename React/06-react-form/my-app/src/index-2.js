import React from "react";
import ReactDOM from "react-dom";

/**
 * 非受控组件
 * 
*/
class App extends React.Component {
  
  constructor(){
    super()

    // 调用React.createRed()方法创建一个ref对象
    this.txtRef = React.createRef()
  }

  getTxt = () => {
    console.log("文本框的值：",this.txtRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef}/>

        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
