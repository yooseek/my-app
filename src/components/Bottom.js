import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { decrease, increase, test } from '../store';
const Bottom = () => {
  const dispatch = useDispatch();

  return (
    <div className="sub_container">
      <h1>bottom</h1>
      <button onClick={() => dispatch(increase())}>증가</button>
      <button onClick={() => dispatch(decrease())}>감소</button>
      <button onClick={() => dispatch(test('change'))}>이름 바꾸기</button>
    </div>
  );
};

export default Bottom;
