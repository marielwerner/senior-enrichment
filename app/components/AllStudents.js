// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// export default class AllStudents extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             students: []
//         }
//     }
//     componentDidMount() {
//         axios.get('/api/students')
//             .then(result => result.data)
//             .then(students => {
//                 this.setState({
//                     students: students
//                 })
//             })
//     }
//     render () {
//         console.log(this.state.students);
//         return (
//             <div>
//             <h1>Students</h1>
//             <ul>
//             { 
//                 this.state.students.map(student => {
//                     return (
//                         <li key key={student.id}>
//                         <Link to=" ">{student.name}</Link></li>
//                     )
//                 })
//             }
//             </ul>
//             </div>
//         )
//     }
// }

//////////////////////////////  This one 

// import React from 'react'
// import { Link } from 'react-router-dom'

// const AllStudents = (props) => {
//     const students = props.students
//     return (
//         <div className="allStudents">
//         <h1>Students</h1>
//         <ul>
//         { 
//             students.map(student => {
//                 return (
//                     <li key={student.id} className = "student" >
//                     <Link to={`/students/${student.id}`}>{student.name}</Link>
//                     <button onClick={() => props.deleteStudent(student.id)}>x</button>
//                     </li>
//                 )
//             })
//         }
//         </ul>
//         </div>
//     )
// }
// export default AllStudents;

import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
    
const AllStudents = (props) => {
    const students = props.students
    const campuses = props.campuses;
    return (
        <div>
            <table className="studentTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map((student, index) => {
                            return (<tr key={index}>
                                <td><h4><Link to={`/students/${student.id}`}>{student.name}</Link></h4></td>
                                <td>{student.email}</td>
                                <td>{
                                    student.campusId===null ?  <h4>pending</h4> : <Link to={`/campuses/${student.campusId}`}>{campuses && campuses.filter(campus => campus.id === student.campusId).map(campus =>{
                                        return <h4>{campus.name}</h4>
                                    })}</Link>
                                }
                                </td>
                                <td>
                                    <button className="btn btn-default btn-xs" onClick = {()=>props.deleteStudent(student.id)}>x</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h3><Link to="/new-student">Add Student</Link></h3>
            <h3><Link to="/campuses">All Campuses</Link></h3>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}
export default AllStudents

