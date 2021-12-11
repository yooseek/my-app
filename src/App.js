import logo from './logo.svg';
import './App.css';

// 0. React 엔진 - 데이터변경감지에서 UI를 그려주는
// 1. 실행과정 (index.html) -- SPA
// 2. JSX 문법

// (1) 리턴시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야한다. -- 변수의 스코프규칙을 일반화하기 위해서
// (3) if 사용 불가능 -> 삼항연산자 사용가능
// (4) 조건부 렌더링 :  조건 && 값(true)
// (5) css 디자인 방법
// (5 -1) 내부에 적는 방법
// (5 -2) 외부파일에 적는 방법
// (5 -3) 라이브러리 사용 (부트스트랩, component-style .. )

let a = 10; //변수
const b = 20; //상수
function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
