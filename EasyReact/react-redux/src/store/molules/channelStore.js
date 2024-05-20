import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },

  //  修改状态
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions; 

// 异步代码
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    // console.log('res', res.data.data.channels)
    dispatch(setChannels(res.data.data.channels))
  };
};

export {fetchChannelList}

const reducer = channelStore.reducer
export default reducer