import { COUNTER_ACTION } from "@redux/counterActionCreator";

const initialState = { count: 5, data: new Date().toString() };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ACTION.UP:
      //   state.count += action.payload.step;
      //   return state;
      return { ...state, count: state.count + action.payload.step };
    case COUNTER_ACTION.DOWN:
      //   state.count -= action.payload.step;
      //   return state;
      return { ...state, count: state.count - action.payload.step };

    case COUNTER_ACTION.RESET:
      //   state.count = 0;
      //   return state;
      return { ...state, count: 0, date: new Date().toString() };
    default:
      return state;
  }
}

export default counterReducer;
