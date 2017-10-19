import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
        <section>
            <h4 className="menu-item">
                <Link to="/campuses">Home</Link>
            </h4>
        </section>
        <section>
            <h4 className="menu-item">  
                <Link to="/students">Students</Link>
            </h4>
        </section>
        </header>
    )
}

export default Header