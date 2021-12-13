import React, { useState } from 'react';
import styled from 'styled-components';

const StyleItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListPage = () => {
  const [post, setPost] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
  ]);
  const handleWrite = () => {
    setPost([...post, input]);
  };
  const [input, setInput] = useState({ id: '', title: '', content: '' });
  const handleForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>리스트페이지</h1>
      <hr />
      <form>
        <input
          text="text"
          placeholder="제목을 입력하세요.."
          name="title"
          value={input.title}
          onChange={handleForm}
        ></input>
        <input
          text="text"
          placeholder="내용을 입력하세요.."
          name="content"
          value={input.content}
          onChange={handleForm}
        ></input>
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      {post.map((n) => (
        <StyleItemBoxDiv>
          <div>
            번호 : {n.id} 제목 : {n.title} 내용 : {n.content}
          </div>
          <button>삭제</button>
        </StyleItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
