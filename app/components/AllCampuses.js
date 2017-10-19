// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// export default class AllCampuses extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campuses: []
//         }
//     }
//     componentDidMount() {
//         axios.get('/api/campuses')
//             .then(result => result.data)
//             .then(campuses => {
//                 this.setState({
//                     campuses: campuses
//                 })
//             })
//     }
//     render () {
//         return (
//             <div>
//             <h1>Campuses</h1>
//             <ul>
//             { 
//                 this.state.campuses.map(campus => {
//                     return (
//                         <li key={campus.id}>
//                         <Link to=" ">{campus.name}</Link></li>
//                     )
//                 })
//             }
//             </ul>
//             </div>
//         )
//     }
// }

////////////////////////////////////////////////// This one 

// import React from 'react'
// import { Link } from 'react-router-dom'
// const AllCampuses = (props) => {
//     const campuses = props.campuses
//     return (
//         <div className="allCampuses">
//         <h1>Campuses</h1>
//         <ul>
//         { 
//             campuses.map(campus => {
//                 return (
//                     <li key={campus.id} className="campus">
//                     <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
//                     <button onClick = {() => props.deleteCampus(campus.id)}>x</button>
//                     </li>
//                 )
//             })
//         }
//         </ul>
//         </div>
//     )
// }
// export default AllCampuses;

//////////////////
import React from 'react'
import { Link } from 'react-router-dom'
import NewCampus from './NewCampus'
const AllCampuses = (props) => {
    const campuses = props.campuses
    return (
        <div className="allCampuses">
            <h1>Campuses</h1>
            <ul>
                {
                    campuses && campuses.map((campus, index) => {
                        return (
                            <div>
                                <li key={campus.id} className="campus">
                                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                                </li>
                                <button onClick={()=>props.deleteCampus(campus.id)}>x</button>
                            </div>
                        )
                    })
                }
            </ul>
            <h3><Link to="/new-campus">Add Campus</Link></h3>
            <h3><Link to="/students">All Students</Link></h3>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}
export default AllCampuses

