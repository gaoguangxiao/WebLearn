import { createContext ,useContext} from "react";

const MsgContext = createContext();

function A() {
  return (
    <div>
      this is A<B></B>
    </div>
  );
}

function B() {
  // 底层组件 通过 useContext钩子函数获取消费数据
  const msg = useContext(MsgContext);

  return <div>this is B:{msg}</div>;
}

function App() {
  const msg = "this is app msg";
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is App
        <A></A>
      </MsgContext.Provider>
    </div>
  );
}

export default App;
