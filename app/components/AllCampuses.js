import React from 'react'
import { Link } from 'react-router-dom'
import NewCampus from './NewCampus'
import NavBar from './NavBar'
const AllCampuses = (props) => {
    const campuses = props.campuses
    return (
        <div className="allCampuses">
            <NavBar />
            <Link to="/new-campus" style={{textDecoration:'none'}}><h2>+ Campus</h2></Link>
            <table className="campus-table">
                <thead>
                    <tr className="campus-table-headers">
                        <th>Campus</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {campuses && campuses.map(campus => {
                        return (<tr key={campus.id}>
                            <td><Link to={`/campuses/${campus.id}`} style={{textDecoration:'none'}}><h4>{campus.name}</h4></Link></td>
                            <td><button className="pure-button" onClick={() => props.deleteCampus(campus.id)}>x</button></td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AllCampuses



