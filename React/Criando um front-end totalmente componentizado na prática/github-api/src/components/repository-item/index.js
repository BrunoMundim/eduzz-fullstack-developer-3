import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles'

const RepositoryItem = ({ name, fullName, linkToRepo }) => {
  return(
    <S.Wrapper>
      <S.WrapperTitle>{ name }</S.WrapperTitle>
      <p>Link para o repositório:</p>
      {console.log(linkToRepo)}
      <a 
        href={linkToRepo}
        target="_blank" 
        rel="noreferrer"                
      > { fullName } </a>
      
    </S.Wrapper>  
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string,
  fullName: PropTypes.string,
  linkToRepo: PropTypes.string,
}

export default RepositoryItem;