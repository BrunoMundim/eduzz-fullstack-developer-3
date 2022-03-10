import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Header from '../header/index'


const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      { children }
    </S.WrapperLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout;
