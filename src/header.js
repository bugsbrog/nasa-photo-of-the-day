import React from 'react'

import styled from 'styled-components';

const StyledHeader = styled.div`
  p {
    color: ${pr => pr.theme.primaryColor};
    font-family: ${pr => pr.theme.secondText};
}
`

const header = (props) => {
  const {text} = props
  
  return (
      <div className= 'header-container'>
      <StyledHeader>
        <p>{text}</p>
      </StyledHeader>
      </div>
  );
};

export default header;