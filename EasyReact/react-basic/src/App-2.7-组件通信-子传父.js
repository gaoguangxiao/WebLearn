import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const getMsg = (msg) => {
    console.log("receive son msg: ", msg);
    setMsg(msg);
  };
  return (
    <div>
      this is app{msg}
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}

function Son({ onGetSonMsg }) {
  const sonMsg = "this is son msg";
  return (
    <div>
      this is son
      <br />
      {sonMsg}
      <button onClick={() => onGetSonMsg(sonMsg)}>send</button>
    </div>
  );
}
export default App;
