import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;

  input {
    border: 3px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    padding: 5px;
    margin-top: 4px;
  }

  button {
    background-color: #161b22;
    padding: 10px;
    border: 1px solid #161b22;
    border-radius: 15%;
    margin-left: 20px;
    color: white;
    font-size: 16px;
    font-weight: 500;

    &:hover{
      background-color: #0d1117;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
  }

  
`;