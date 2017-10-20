import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
const AllStudents = (props) => {
    const students = props.students
    const campuses = props.campuses;
    return (
        <div>
            <h1>Students</h1>
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
                        students && students.map(student => {
                            return (<tr key={student.id}>
                                <td><h4><Link to={`/students/${student.id}`}>{student.name}</Link></h4></td>
                                <td>{student.email}</td>
                                <td>{
                                    student.campusId===null ?  <h4>pending</h4> : <Link to={`/campuses/${student.campusId}`}>{campuses && campuses.filter(campus => campus.id === student.campusId).map(campus =>{
                                        return <h4 key={campus.id}>{campus.name}</h4>
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

