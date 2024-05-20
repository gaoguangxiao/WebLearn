import { useRef } from "react";

/**
 * 获取React的dom元素
 *
 */

// useRef生成ref对象，绑定到dom标签
// dom可用时，ref.current获取dom
// 渲染完毕之后dom生成之后可用

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("inputRef", inputRef.current);

  };

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleClick}>获取dom元素</button>
      this is App
    </div>
  );
}

export default App;
