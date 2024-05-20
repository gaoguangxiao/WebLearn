import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    console.log("表单的text:",value);
  };
  return (
    <div>
      <h1>App-2.1-受控表单绑定</h1>
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <br />
        <button onClick={handleClick}>获取表单值</button>
      </div>
    </div>
  );
}

export default App;
