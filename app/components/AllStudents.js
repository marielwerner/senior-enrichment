import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
const AllStudents = (props) => {
    const students = props.students
    const campuses = props.campuses;
    return (
        <div>
            <NavBar />
            <Link to="/new-student" style={{ textDecoration: 'none' }}><h2>+ Student</h2></Link>
            <table className="student-table">
                <thead>
                    <tr className="student-table-headers">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map(student => {
                            return (<tr key={student.id}>
                                <td><Link to={`/students/${student.id}`} style={{ textDecoration: 'none' }}><h4>{student.name}</h4></Link></td>
                                <td>{student.email}</td>
                                <td>{
                                    student.campusId === null ? <h4>pending</h4> : <Link to={`/campuses/${student.campusId}`} style={{ textDecoration: 'none' }}>
                                        {campuses && campuses.filter(campus => campus.id === student.campusId).map(campus => {
                                            return <h4 key={campus.id}>{campus.name}</h4>
                                        })}</Link>
                                }
                                </td>
                                <td>
                                    <button onClick={() => props.deleteStudent(student.id)}>x</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AllStudents
