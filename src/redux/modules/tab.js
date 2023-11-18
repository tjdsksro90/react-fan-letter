import { blue, red } from "../../assets/BasicStyle";

// 초기 상태값
const initialState = blue;

// 리듀서 : 함수
// input : state와 action
export const reduxTab = (state = initialState, action) => {
  console.log(state, "switch 들어옴", action, "action");
  switch (action.type) {
    case "cap": // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      console.log(state, "cap 들어옴!", action, "action");
      return blue;
    case "iron":
      // console.log(state, "iron 들어옴!", action, "action");
      return red;
    default:
      return state;
  }
};

export default reduxTab;
