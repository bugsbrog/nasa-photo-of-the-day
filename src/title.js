import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.div`
    h2 {
        color: ${pr => pr.theme.primaryColor};
        font-family: ${pr => pr.theme.firstText};

        &::before {
            content: '🪐';
            &:hover {
                transform: scale(1.1);
        }
    }
    }
`

const Title = props => {
    const {title} = props

    return (
        <StyledTitle>
            <h2>{title}</h2>
        </StyledTitle>
    )
}

export default Title;