import "./App-1.11-基础样式控制.css";

const style = {
  color: "red",
  fontSize: "50px",
};

function App() {
  return (
    <div>
      {/* 行内样式控制 */}
      {/* <span style={{ color: "red", fontSize:'50px'}}>this is span</span> */}
      <span style={style}>this is span</span>

      <br />

      {/* 通过class类名控制 */}
      <span className="foo">this is class foo span</span>
    </div>
  );
}

export default App;
