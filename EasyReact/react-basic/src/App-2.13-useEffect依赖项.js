import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";
function App() {
  const [list, setList] = useState([]);

  //useEffect 依赖项的参数说明
  // 没有依赖项，组件初始渲染+组件更新渲染执行
  // 空数组依赖，组件初始化渲染
  // 添加特定依赖项，组件初始化+特定依赖项变化时变化
  // useEffect(() => {
  //   console.log('无依赖项、副作用函数执行了')
  // });

  // 空数组依赖，组件初始化渲染
  // useEffect(() => {
  //   console.log('无依赖项、副作用函数执行了')
  // },[]);

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
