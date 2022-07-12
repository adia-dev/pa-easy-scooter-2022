import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    return (
        <Link to="/" className="absolute left-5 lowercase font-bold">
            Easy Scooter
        </Link>
    )
}

export default HeaderLogo