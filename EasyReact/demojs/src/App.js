import { useEffect } from "react";
import "./App.css";
import useBridge from "./useBridge";
import useThirdBridge from "./useThirdBridge";
import useViewBridge from "./useViewBridge";
function App() {
  const bridge = useBridge();

  // 视图
  const viewBridge = useViewBridge();
  //第三方
  const thirdBridge = useThirdBridge();

  useEffect(() => {
    bridge.callApp("webReady", {});
  }, []);

  const openView = () => {};
  // const share = () => {
  //   thirdBridge.openShare("text");
  // };

  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <fieldset>
        <h3>RSViewBridge【视图】</h3>
        <button onClick={openView}>打开视图</button>
        <button onClick={viewBridge.snapshot}>截屏</button>
        <h4>市场评分</h4>
        <button onClick={()=> viewBridge.marketRating('appInScore')}>市场评分</button>
        <button onClick={()=> viewBridge.marketRating('appInComment')}>应用内评论</button>
        <button onClick={()=> viewBridge.marketRating('appOutComment')}>应用外评论</button>
      </fieldset>
      <fieldset>
        <h3>第三方</h3>
        <button onClick={()=>thirdBridge.openShare("text")}>文本分享打开视图</button>
      </fieldset>
    </div>
  );
}

export default App;
