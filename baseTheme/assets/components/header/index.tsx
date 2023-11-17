import React from 'react'

const Header: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    return <>{children}</>
}

export default Header
