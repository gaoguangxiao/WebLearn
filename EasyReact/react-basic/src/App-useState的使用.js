// useState
import { useState } from "react";

function App() {
  // 调用useState添加状态变量
  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
