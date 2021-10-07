import React from 'react'

const Content = props => {
    const {text} = props

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Content;