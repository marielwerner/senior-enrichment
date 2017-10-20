import React from 'react'
import { Link } from 'react-router-dom'
import NewCampus from './NewCampus'
const AllCampuses = (props) => {
    const campuses = props.campuses
    return (
        <div className="allCampuses">
            <h1>Campuses</h1>
            <table className="campusTable">
                <tbody>
                    {campuses && campuses.map(campus => {
                        return (<tr key={campus.id}>
                            <td><h4><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h4></td>
                            <td><button onClick={() => props.deleteCampus(campus.id)}>x</button></td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <h3><Link to="/new-campus">Add Campus</Link></h3>
            <h3><Link to="/students">All Students</Link></h3>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}
export default AllCampuses


