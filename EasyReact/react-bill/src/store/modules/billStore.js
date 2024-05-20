import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },

  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

// 解构actionCreater函数
const { setBillList } = billStore.actions;

const getBillList = () => {
  return async (dispatch) => {
    //编写异步
    const res = await axios.get("http://localhost:3005/ka");
    // console.log('res', res)
    //触发异步
    dispatch(setBillList(res.data));
  };
};

export { getBillList };

// 导出reducer
const reducer = billStore.reducer;
export default reducer;
