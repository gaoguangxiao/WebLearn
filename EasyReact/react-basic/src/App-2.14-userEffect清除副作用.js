import { useState, useEffect } from "react";

function Son() {
  useEffect(() => {
    console.log("son渲染完毕");
    const timer = setInterval(() => {
      console.log("定时器执行");
    }, 1000);

    //清理副作用
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>this is son</div>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      this is App
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载son组件</button>
    </div>
  );
}

export default App;
