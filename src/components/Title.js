import React from 'react'

const Title = props => ( <h1 className={`display-${props.size}`}>{props.children}</h1> )

export default Title