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
    try {
      // do something...
      let bridge = window.nativeBridge
      if (bridge) {
        window.nativeBridge.postMessage(message)
      }
    } catch (e) {
      console.error(e)
    }
  };

  return { callApp };
};

export default useBridge;
