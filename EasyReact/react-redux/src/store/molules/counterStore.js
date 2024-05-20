import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",

  // 初始化state
  initialState: {
    count: 0,
  },

  //   修改状态的方法
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addNum(state, action) {
      state.count = state.count + action.payload;
    },
    addToNum(state, action) {
      state.count = action.payload;
    },
  },
});

// 解构出来actionCreater函数
const { increment, decrement,addNum, addToNum } = counterStore.actions;

// 获取reducer
const counterReducer = counterStore.reducer;

// 按需导出actionCreater
export { increment, decrement,addNum,addToNum };

// 默认导出导出reducer
export default counterReducer;
