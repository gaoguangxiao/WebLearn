import { useEffect } from "react";
import "./App.css";
import useBridge from "./useBridge";
import useThirdBridge from "./useThirdBridge";
import useViewBridge from "./useViewBridge";
import useAudioBridge from "./useAudioBridge";
import useOfflineBridge from "./useOfflineBridge";
import useSpeechBridge from "./useSpeechBridge";
function App() {
  const bridge = useBridge();

  // 视图
  const viewBridge = useViewBridge();
  //第三方
  const thirdBridge = useThirdBridge();
  //音频
  const audioBridge = useAudioBridge();
  //资源
  const offlineBridge = useOfflineBridge()
  //演讲
  const speechBridge = useSpeechBridge();
  
  useEffect(() => {
    bridge.callApp("webReady", {});
  }, []);

  
  return (
    <div className="App" style={{}}>
      <fieldset>
        <h3>RSViewBridge【视图】</h3>
        
        <h4>截屏</h4>
        <button onClick={viewBridge.openView}>打开视图</button>
        <button onClick={viewBridge.snapshot}>截屏</button>
        <button onClick={viewBridge.snapshotfHalf}>截屏含参数</button>
        <button onClick={viewBridge.checkAppConfig}>检测更新</button>


        <h4>对话框</h4>
        <button onClick={() => viewBridge.openDialog(1)}>对话框一个按钮</button>
        <button onClick={() => viewBridge.openDialog(2)}>对话框二个按钮</button>
        <button onClick={() => viewBridge.openDialog(3)}>对话框三个按钮</button>

        <h4>市场评分</h4>
        <button onClick={() => viewBridge.marketRating("appInScore")}>
          市场评分
        </button>
        <button onClick={() => viewBridge.marketRating("appInComment")}>
          应用内评论
        </button>
        <button onClick={() => viewBridge.marketRating("appOutComment")}>
          应用外评论
        </button>
      </fieldset>
      <fieldset>
        <h3>第三方</h3>
        <button onClick={() => thirdBridge.openShare("text")}>文本分享打开视图</button>

        <button onClick={() => thirdBridge.openApplePay("ppq001")}>苹果支付</button>
      </fieldset>
      <fieldset>
        <h3>音频</h3>
        <button onClick={() => audioBridge.playAudio("https://file.risekid.cn/web/adventure/static/voice_107_2.a499eb45.mp3")}>播放音频</button>
        <button onClick={() => audioBridge.play404Audio("https://file.risekid.cn/web/adventure/static/voice_107_2.a499eb4.mp3")}>播放404音频</button>
        <button onClick={() => audioBridge.playAudioEmptyByte("")}>播放空字节音频</button>
        <button onClick={() => audioBridge.playAudioTimer("maintimer")}>定时音频</button>
        <button onClick={() => audioBridge.playAudioTrack("main3")}>播放音频3</button>
        <button onClick={() => audioBridge.playAudioTrack("main4")}>播放音频4</button>
        <button onClick={() => audioBridge.playAudioTrack("main5")}>播放音频5</button>
        <button onClick={() => audioBridge.playAudioTrack("main6")}>播放音频6</button>
        <button onClick={() => audioBridge.playAudioTrack("main7")}>播放音频7</button>
        <button onClick={() => audioBridge.loopPlayAudio("")}>循环播放音频</button>
      </fieldset>
      <fieldset>
        <h3>语音评测、识别、合成</h3>

        <button onClick={() => speechBridge.startRecording("")}>开始录音</button>
        <button onClick={() => speechBridge.stopRecording("")}>停止录音</button>
        
    
        <button onClick={() => speechBridge.startEvaluation("")}>开始评测</button>
        <button onClick={() => speechBridge.stopEvaluation("")}>停止评测</button>

        <button onClick={() => speechBridge.startRecognition("")}>开始识别</button>
        <button onClick={() => speechBridge.stopRecognition("")}>停止识别</button>

        <button onClick={() => speechBridge.startSynthesis("")}>开始合成</button>
        <button onClick={() => speechBridge.stopSynthesis("")}>停止合成</button>
        
        <button onClick={() => speechBridge.playSynthesis("")}>播放合成音</button>
        <button onClick={() => speechBridge.stopPlaySynthesis("")}>停止播放合成音</button>
        <button onClick={() => speechBridge.clearSynthesis("")}>清理某条合成音</button>
        <button onClick={() => speechBridge.clearAllSynthesis("")}>清理合成音目录</button>
        
      </fieldset>
      <fieldset>
        <h3>AI聊天</h3>

        <button onClick={() => speechBridge.queryReply("")}>询问问题</button>

        <button onClick={() => speechBridge.configChat("")}>创建聊天</button>
        <button onClick={() => speechBridge.sendChatMessage(false)}>聊天语音</button>
        <button onClick={() => speechBridge.sendChatMessage(true)}>聊天流式语音</button>
        <button onClick={() => speechBridge.endChat("")}>结束聊天</button>
        
      </fieldset>
      <fieldset>
        <h3>预置资源</h3>
        <button onClick={() => offlineBridge.preset6()}>检测6资源</button>
        <button onClick={() => offlineBridge.preset7()}>检测7资源</button>
        <button onClick={() => offlineBridge.preset8()}>检测8资源</button>
        <button onClick={() => offlineBridge.checkAudio()}>检测音频</button>
        
        <button onClick={() => offlineBridge.clearOffline()}>清理全部资源</button>
        <button onClick={() => offlineBridge.clearOfflinepreset()}>清理预置678</button>

        <button onClick={() => offlineBridge.loadPkg()}>loadPkg</button>
        
      </fieldset>
    </div>
  );
}

export default App;
