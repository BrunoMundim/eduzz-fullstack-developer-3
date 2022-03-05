import React from 'react'
import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'

export function App() {
  return (
    <>
      <p role="p">quote xpto - Speaker</p>
      <button>Quote no Jutsu</button>
      <img src={narutoImg} alt='Naruto segurando uma kunai' />
    </>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
