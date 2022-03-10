import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 100%;
  margin: 15px 0px 0px 15px;
  height: 235px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-left: 4px;
  }
  h3 {
    font-size: 16px;
    margin-left: 6px;
    margin-top: 10px
  }
  h4 {
    margin-top: 30px;
    font-size: 14px;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 5px;
  }

  a {
    color: blue;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }

  span {
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 210px;
  margin: 12px
`;