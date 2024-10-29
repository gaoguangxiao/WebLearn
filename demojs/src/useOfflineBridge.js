import useBridge from "./useBridge";

const useOfflineBridge = () => {
  const bridge = useBridge();

  //preset7
  const preset6 = (data) => {
    var params = {
      cacheKey: "https://file.risekid.cn/book/audio/2024-01-08/75cd1b40-73c9-4ef0-8a80-31ce62ed88f0.mp3",
    };
    bridge.callApp("checkOffline", params);
  };
  const preset7 = (data) => {
    var params = {
      // cacheKey: "https://file.risekid.cn/app/skin-store/txu_1.png",
      cacheKey:"https://file.risekid.cn/app/skin-store/txu_8.png",
      // cacheKey:"http://file.risekid.cn/app/medal/medal_23.png"
    };
    bridge.callApp("checkOffline", params);
  };
  const preset8 = (data) => {
    var params = {
      cacheKey: "https://file.risekid.cn/book/image/2024-01-18/d9eb93ee-e377-46b4-87db-f6bba3e22d17.jpg",
    };
    bridge.callApp("checkOffline", params);
  };

  const checkAudio = (data) => {
    var params = {
      cacheKey: "https://test.audio.risekid.cn/web/app/static/vo_login.f7f61b46.mp3",
    };
    bridge.callApp("checkOffline", params);
  };
  
  const clearOffline = (data) => {
    var params = {
      
    };
    bridge.callApp("clearOffline", params);
  };

  const clearOfflinepreset = (data) => {
    var params = {
      folderName:"preset"
    };
    bridge.callApp("clearOffline", params);
  };

  const loadPkg = (data) => {
    var params = {
      item:"2304",
      progressAction:"loadProgress_2_2304",
      type:2
    };
    bridge.callApp("loadPkg", params);
  };

  return { preset6,preset7,preset8,checkAudio,clearOffline,clearOfflinepreset,loadPkg};
};

export default useOfflineBridge;
