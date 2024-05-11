import React from "react";
import ReactDOM from "react-dom";

// 给state添加一个状态，作为表单元素的value值（控制表单元素值的来源）
// 给表单元素绑定change事件，将表单元素设置为state的值（控制表单元素值的变化）
class App extends React.Component {
  state = {
    txt: "",
  };

  handChange = (e) => {
    this.setState({
      txt: e.target.value,
    });
  };

  // 处理下拉框的变化
  handCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  // 处理复选框
  handleChecked = (e) => {
    console.log('复选框的值',e.target.checked)
    this.setState({
      isChecked: e.target.checked,
    });
    console.log('复选框的值state',this.state.isChecked)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.handChange} />

        <br />

        {/* 下拉框 */}
        <select>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gz">广州</option>
        </select>

        <br></br>
        {/* 复选框 */}
        <input type="checkbox" onChange={this.handleChecked}></input>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
