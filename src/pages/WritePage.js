import React from 'react';

const handleWrite = () => {
  let post = { id: 5, title: '인풋값' };
};

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기페이지</h1>
      <hr />
      <form>
        <input text="text" placeholder="제목을 입력하세요.."></input>
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
