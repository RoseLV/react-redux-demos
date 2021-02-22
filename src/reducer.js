import { INCREASE, DECREASE } from "./actionTypes";

// const initialState = {
//   count: 0
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 }
//     case DECREASE:
//       return { count: state.count - 1 }
//     default:
//       return state
//   }
// }  

// 这样写也ok；mapStateToProps里需要把state赋值给一个plain object的key的value；
// 所以直接在这里写成上面注释那样会更好

export default function(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    default:
      return state
  }
}