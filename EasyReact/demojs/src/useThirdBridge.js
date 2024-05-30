import useBridge from "./useBridge";

const useThirdBridge = () => {

  const bridge = useBridge();

  const openShare = (mediaType, imageData) => {
    var params = {
      scenes: [
        {
          scene: "wxSession",
          mediaType: mediaType,
          content: {
            text: "恢复硬盘数据如何操作？教你这5种简单高效的方法！",
            imageUrl: "https://file.risekid.cn/app/skin-store/beidaiku_1.png",
            thumbUrl: "https://file.risekid.cn/app/skin-store/beidaiku_1.png",
            description: "Web描述内容测试",
            title: "web标题测试",
            webUrl: "http://app.risekid.cn",
            hdImageData: imageData,
          },
        },
        {
          scene: "wxTimeline",
          mediaType: mediaType,
          content: {
            text: "恢复硬盘数据如何操作？教你这5种简单高效的方法！",
            description: "Web描述内容测试",
            title: "web标题测试",
            webUrl: "http://app.risekid.cn",
            imageData: "",
          },
        },
      ],
      mode: "popup",
    };

    bridge.callApp("share", params);
  };

  return {openShare};
};

export default useThirdBridge