import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  // http요청 (jquery ajax, fetch , axios(다운)) 3가지 방법이 있다.

  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState([]);
  //의존리스트가 없으면 최초에 한번만 실행한다.
  useEffect(() => {
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
      { id: 4, title: '제목4', content: '내용4' },
    ];
    setBoards([...datas]);
    setUser({ id: 1, username: 'ssar' });
  }, []);
  return (
    <div>
      <Home boards={boards} setBoards={setBoards} user={user}></Home>
    </div>
  );
};

export default HomePage;
