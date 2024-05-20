import { configureStore } from "@reduxjs/toolkit";

// 导入子模块reducer
import counterReducer from "./molules/counterStore";

import channelStore from "./molules/channelStore"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel:channelStore
  },
});

export default store;
