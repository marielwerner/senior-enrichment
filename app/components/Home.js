import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h1 className="menu-item">
                        <Link to="/students">Students</Link>
                    </h1>
                </section>
                <section>
                    <h1 className="menu-item">
                        <Link to="/campuses">Campuses</Link>
                    </h1>
                </section>
            </div>
        )
    }
}

