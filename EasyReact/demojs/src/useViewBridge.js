import useBridge from "./useBridge";

const useViewBridge = () => {
  const bridge = useBridge();

  //市场评分
  const marketRating = (data)=> {
    var params = {
        'type': data,
        'appId':'6474597107',
        'uri':'itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=6474597107'
    };
    bridge.callApp("marketRating",params);
  }

  //截屏
  const snapshot = () => {
    bridge.callApp("snapshot");
  };

  return { marketRating,snapshot };
};

export default useViewBridge;
