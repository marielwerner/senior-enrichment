import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AllStudents from './AllStudents'

export default class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus: {},
            campusStudents: []
        }
        this.deleteStudentFromCampus = this.deleteStudentFromCampus.bind(this)
    }
    componentDidMount() {
        const campusId = this.props.match.params.campusId
        axios.get(`/api/campuses/${campusId}`)
            .then(result => result.data)
            .then(campus => this.setState({
                campus: campus,
            }))
            .then(() => {
                this.setState({
                    campusStudents: this.state.campus.students
                })
            })
    }
    deleteStudentFromCampus(campusId, studentId) {
        axios.delete(`/api/campuses/${campusId}/students/${studentId}`)
            .then(result => result.data)
            .then(outgoingStudent => {
                const remainingStudents = this.state.campusStudents.filter(student => outgoingStudent.id !== student.id)
                this.setState({
                    campusStudents: remainingStudents
                })
            })
            .then(() => {
                axios.get('/api/students')
                    .then(result => result.data)
                    .then(students => {
                        this.props.updateStudent(students)
                    })
            })
    }
    render() {
        const campus = this.state.campus
        const students = this.state.campusStudents
        return (
            <div className="campus">
                <h3>{campus.name}</h3>
                <table>
                    {
                        students && students.map(student => {
                            return (<tr key={student.id}>
                                <td><h4><Link to={`/students/${student.id}`}>{student.name}</Link></h4></td>
                                <td><button onClick={() => this.deleteStudentFromCampus(campus.id, student.id)}>x</button></td>
                            </tr>)
                        })
                    }
                </table>
                <h3><Link to="/students">All Students</Link></h3>
                <h3><Link to="/campuses">All Campuses</Link></h3>
                <h3><Link to="/">Home</Link></h3>
            </div>
        )
    }
}


