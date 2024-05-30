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

  return (
    <div className="App" style={{}}>
      <fieldset>
        <h3>RSViewBridge【视图】</h3>
        <button onClick={openView}>打开视图</button>

        <h4>截屏</h4>
        <button onClick={viewBridge.snapshot}>截屏</button>
        <button onClick={viewBridge.snapshotfHalf}>截屏含参数</button>

        <h4>对话框</h4>
        <button onClick={()=>viewBridge.openDialog(1)}>对话框一个按钮</button>
        <button onClick={()=>viewBridge.openDialog(2)}>对话框二个按钮</button>
        <button onClick={()=>viewBridge.openDialog(3)}>对话框三个按钮</button>
        
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
