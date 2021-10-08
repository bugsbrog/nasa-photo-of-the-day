import React from 'react'
import styled from 'styled-components';

const StyledContent = styled.div`
    p {
        color: ${pr => pr.theme.tertiaryColor};
        font-family: ${pr => pr.theme.firstText};
        
    }
`


const Content = props => {
    const {text} = props

    return (
        <StyledContent>
            <p>{text}</p>
        </StyledContent>
    )
}

export default Content;