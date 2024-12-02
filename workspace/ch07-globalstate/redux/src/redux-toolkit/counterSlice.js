import { createSlice } from "@reduxjs/toolkit";

// 반환값 {reducer, actions, ...}
// reducer = 리듀서 함수, Redux 스토어에 전달해야 함
// actions = 각 리듀서에 해당하는 액션 생성자 객체
const counterSlice = createSlice({
  name: "myCounter", //슬라이스 이름()
  initialState: { count: 10 },
  reducers: {
    countUp: (state, action) => {
      //immer 라이브러리를 내부적으로 사용함
      state.count += action.payload;
    },
    countDown: (state, action) => {
      state.count -= action.payload;
    },
    countReset: (state) => {
      state.count = 0;
    },
  },
});

export const { countUp, countDown, countReset } = counterSlice.actions;

export default counterSlice;
