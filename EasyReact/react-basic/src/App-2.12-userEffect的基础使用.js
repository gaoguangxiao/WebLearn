import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";
function App() {
  const [list, setList] = useState([]);

  // 由视图渲染完成执行的操作
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      // console.log('jsonRes', jsonRes)
      // console.log("jsonRes", jsonRes.data.channels);
      setList(jsonRes.data.channels);
    }

    getList();
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
