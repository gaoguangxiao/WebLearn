import useBridge from "./useBridge";

const useViewBridge = () => {
  const bridge = useBridge();

  //市场评分
  const marketRating = (data) => {
    var params = {
      type: data,
      appId: "6474597107",
      uri: "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=6474597107",
    };
    bridge.callApp("marketRating", params);
  };

  //截屏
  const snapshot = () => {
    bridge.callApp("snapshot");
  };

  const snapshotfHalf = () => {
    var params = {
      size: {
        width: 0.5,
        height: 0.5,
      },
      position: {
        left: 0,
        top: 0,
      },
      snapshotWidth: 600,
    };
    bridge.callApp("snapshot", params);
  };
  //对话框
  const openDialog = (count) => {
    console.log("数目：connt", count);
    var btns = [];
    for (let index = 0; index < count; index++) {
      var btn = {
        text: "按钮" + index,
        bold: index == 0 ? true : false,
      };
      btns.push(btn);
    }

    var params = {
      title: "对话框标题",
      content: "对话框内容",
      buttons: btns,
    };
    bridge.callApp("openDialog", params);
  };

  return { marketRating, snapshot, snapshotfHalf, openDialog };
};

export default useViewBridge;
