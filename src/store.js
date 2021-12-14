//액션
export const increase = () => ({ type: 'INCREMENT' });
export const decrease = () => ({ type: 'DECREMENT' });
export const test = (username) => ({ type: 'test', payload: username });

//상태

const initstate = {
  number: 1,
  username: 'seek',
};

// 리듀서 (액션의 결과를 걸러내는 친구)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 }; //return 되는 순간 ui 변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    case 'test':
      return { username: action.payload };
    default:
      return state;
  }
};

export default reducer;
