import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  // 구조분할 할당
  const { boards, setBoards, user } = props;
  return (
    <div>
      <div>
        <h1>홈페이지입니다.</h1>
        <Button variant="primary">Primary</Button>
        <StyledDeleteButton user={user} onClick={() => setBoards([])}>
          로그인체크
        </StyledDeleteButton>
        <StyledAddButton user={user} onClick={() => setBoards([])}>
          더하기
        </StyledAddButton>
        <button onClick={() => setBoards([])}>전체삭제</button>
        {boards.map((board) => (
          <h3 key={board.id}>
            제목 : {board.title} 내용 : {board.content}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Home;
