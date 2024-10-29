import useBridge from "./useBridge";

const useAudioBridge = () => {
  const bridge = useBridge();

  // sound_203_3.5cbdfaf2
  //播放音频
  const playAudio = (data) => {
    var params = {
      track: "main",
      timeEvent: 1,
      url: data,
    };
    bridge.callApp("playAudio", params);
  };

  //404
  const play404Audio = (data) => {
    // var params = {
    //   track: "main",
    //   url:data,
    // };
    // bridge.callApp("playAudio", params);

    //执行
    var params1 = {
      track: "main",
      url: "https://file.risekid.cn/web/adventure/static/voice_108_2.a499eb4.mp3",
    };
    bridge.callApp("playAudio", params1);

    // var params2 = {
    //   track: "main2",
    //   url:"https://file.risekid.cn/web/adventure/static/voice_109_2.a499eb4.mp3",
    // };
    // bridge.callApp("playAudio", params2);
  };

  // https://file.risekid.cn/web/adventure/static/voice_108_9.e801d119.mp3
  const playAudioEmptyByte = (data) => {
    var params = {
      track: "problem",
      url: "https://file.risekid.cn/web/adventure/static/voice_108_9.e801d119.mp3",
    };
    bridge.callApp("playAudio", params);
  };

  //定时音频，用于测试sdk，间隔播放音频能力
  const playAudioTimer = (data) => {
    var params = {
      track: data,
      url: "https://file.risekid.cn/web/adventure/static/click.c7752adb.mp3",
    };

    for (let i = 0; i < 10; i++) {
      setTimeout(() => callAudiotimer(params), i * 500); // 每次调用延迟 600ms
    }
  };

  function callAudiotimer(params) {
    // bridge.callApp("stopAudio", params);
    const timestamp = Date.now(); // 获取当前时间戳
    console.log("Current timestamp:", timestamp);
    bridge.callApp("playAudio", params);
  }

  const playAudioTrack = (data) => {
    var params = {
      track: data,
      url: "https://file.risekid.cn/web/adventure/static/sound_107_1_3.8e1d0145.mp3",
    };
    bridge.callApp("playAudio", params);
  };

  const loopPlayAudio = (data) => {
    var params = {
      track: "6474597107",
      loop: 1,
      numberOfLoops: 2,
      url: "https://test.audio.risekid.cn/web/app/static/vo_login.f7f61b46.mp3",
      // url:"https://file.risekid.cn/web/adventure/static/sound_105_1.59fa2e58.mp3"
    };
    bridge.callApp("playAudio", params);
  };

  return {
    playAudio,
    playAudioTrack,
    playAudioEmptyByte,
    play404Audio,
    loopPlayAudio,
    playAudioTimer,
  };
};

export default useAudioBridge;
