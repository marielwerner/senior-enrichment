import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <ul className="home-nav">
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/students" className="students">Students</Link></li>
                <li><Link to="/campuses" className="campuses">Campuses</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;