import { useState } from "react";

// 声明use开头的函数
// 在函数体内封装可复用的逻辑
// 把组件内用到的状态或回调return
// 在那个组件使用，就执行这个函数

function useToggle() {
  const [value, setValue] = useState(true);

  const toggle = () => setValue(!value);

  return { value, toggle };
}

function App() {
  // const [value, setValue] = useState(true);
  // const toggle = () => setValue(!value);
  
  const { value, toggle } = useToggle();

  return (
    <div>
      {value && <div> this is App</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
