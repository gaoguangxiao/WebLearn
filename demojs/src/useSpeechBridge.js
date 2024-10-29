import useBridge from "./useBridge";

const useSpeechBridge = () => {
  const bridge = useBridge();

  const startRecognition = (data) => {
    var params = {
      path: "/12/124/",
      plat: "TIM",
      TIMConfig: {
        engineModelType: "16k_zh",
        filterDirty: 1,
        audioFlowSilenceTimeOut: 10.0,
      },
    };
    bridge.callApp("startRecognition", params);
  };

  const stopRecognition = (data) => {
    var params = {};
    bridge.callApp("stopRecognition", params);
  };

  //录制
  const startRecording = (data) => {
    var params = {
      path: "/12/124/",
      plat: "TIM",
      TIMConfig: {
        engineModelType: "16k_zh",
        filterDirty: 1,
        audioFlowSilenceTimeOut: 10.0,
      },
      speechData:{
        path: "/12/124/",
        text:"apple"
      }
    };
    bridge.callApp("startRecording", params);
  };
  
  const stopRecording =(data) => {
    var params = {

    };
    bridge.callApp("stopRecording", params);
  };

  //开始评测
  const startEvaluation = (data) => {
    var params = {
      path: "/12/124/",
      text:"apple is big",
      plat: "TIM",
      stream:true,
      duration:10,
      score:false,
      recognition:true,
      recognitionStream:false,
      filterSensitive:true,
      speechData:{
        text:"apple",
        path: "/12/124/",
      },
      TIMConfig: {
        evalMode:1,
        engineModelType: "16k_zh",
        filterDirty: 1,
        audioFlowSilenceTimeOut: 5000.0,
      },
    };
    bridge.callApp("startEvaluationSpeech", params);
  };

  //停止评测
  const stopEvaluation = (data) => {
    var params = {
    };
    bridge.callApp("stopEvaluationSpeech", params);
  };

  //合成
  const startSynthesis = (data) => {
    var params = {
      path: "/synthesis/1724665627979",
      text : "Yes, the tiger is hungry too! The tiger wakes up and wants to eat. Why do you think Baby Monkey went down to the ground?"
    };
    bridge.callApp("startSynthesis", params);
  };
  const stopSynthesis = (data) => {
    var params = {};
    bridge.callApp("stopSynthesis", params);
  };

  //播放合成音-
  const playSynthesis = () => {
    var params = {
      "localUrl":"/synthesizer/synthesis/1724665627979.wav"
    };
    bridge.callApp("playPlayback", params);
  };

  const stopPlaySynthesis = () => {
    var params = {
      
    };
    bridge.callApp("stopPlayback", params);
  }

  //清理合成音
  const clearSynthesis = () => {
    var params = {
      "localUrl":"/synthesizer/1/2/41.wav"
    };
    bridge.callApp("clearPlayback", params);
  };

   //清理合成音
   const clearAllSynthesis = () => {
    var params = {
      "folderName":"synthesizer"
    };
    bridge.callApp("clearPlayback", params);
  };

  //单次聊天，不携带，自己管理上下文。会话ID、回话历史、会话，是否是流式。
const queryReply = () => {
  var params = {
    "problem":"今天天气怎么样？",
    "chatHistory":"json",
    "stream":1,
    "conversationId":""
  };
  bridge.callApp("queryReply", params);
}

const configChat = () => {
  var params = {
    "user":"user",
    // "sceneId":"1",
  };
  bridge.callApp("configChat", params);
}

const sendChatMessage = (stream) => {
  var params = {
    "problem":"红楼梦的作者是？",
    // "isSynthesis":true,
    // "isPlayAnswer":true,
    "stream":stream,
    "enableCacheHistory":false,
    // "synthesisConfig":{
      // path: "/1/2/41",
    // }
  };
  bridge.callApp("sendChatMessage", params);
}

const endChat = () => {
  var params = {
  };
  bridge.callApp("endChat", params);
}
  return {
    startRecognition,
    stopRecognition,
    startRecording,
    stopRecording,
    startEvaluation,
    stopEvaluation,
    startSynthesis,
    stopSynthesis,
    playSynthesis,
    stopPlaySynthesis,
    clearSynthesis,
    clearAllSynthesis,
    queryReply,
    configChat,
    sendChatMessage,
    endChat
  };
};

export default useSpeechBridge;
