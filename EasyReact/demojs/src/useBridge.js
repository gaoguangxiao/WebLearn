const useBridge = () => {
  // const [value, setValue] = useState(true);

  const callApp = (funcName, params) => {
    var message = {
      action: funcName,
      data: params,
      callbackId: 10,
    };

    var action_Str = JSON.stringify(message);
    console.log("----web call app---" + action_Str);
    const bridge = window.nativeBridge;
    if (bridge) {
      bridge.postMessage(message);
    } else {
      console.log("无参数");
    }
  };

  return { callApp };
};

export default useBridge;
