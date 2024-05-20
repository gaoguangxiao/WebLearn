import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  addToNum,
  addNum,
} from "./store/molules/counterStore";

import { fetchChannelList } from "./store/molules/channelStore";
import { useEffect } from "react";

function App() {
  const { count } = useSelector((state) => state.counter);

  const { channelList } = useSelector((state) => state.channel); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList());
  }, []);
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <br />
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
      <br />
      <button onClick={() => dispatch(addNum(10))}>+10</button> 
      <br />

      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
