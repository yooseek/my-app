import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <div>
        <ul>
          <li>오시는 길 : 서울 강남구 ... </li>
          <li>전화번호 : 010 5004 ... </li>
        </ul>
      </div>
    </FooterList>
  );
};

export default Footer;
