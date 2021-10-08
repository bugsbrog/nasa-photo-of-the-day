import React from 'react'

import styled from 'styled-components'

const StyledFooter = styled.div`
    p {
        color: ${pr => pr.theme.fourthColor};
        font-family: ${pr => pr.theme.secondText};
}
`

const Footer = props => {
    const {title} = props
    
    return (
        <div className='footer-container'>
            <StyledFooter>
            <p>{title}</p>
            </StyledFooter>
        </div>
    )
}

export default Footer;