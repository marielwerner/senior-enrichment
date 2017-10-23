import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AllStudents from './AllStudents'
import NavBar from './NavBar'
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
            <div>
            <NavBar />
            <div className="campus">
                
                <h3>{campus.name} Students</h3>
                <table>
                    {
                        students && students.map(student => {
                            return (<tr key={student.id}>
                                <td><Link to={`/students/${student.id}`} style={{textDecoration:'none'}}><h4>{student.name}</h4></Link></td>
                                <td><button onClick={() => this.deleteStudentFromCampus(campus.id, student.id)}>x</button></td>
                            </tr>)
                        })
                    }
                </table>
            </div>
            </div>
        )
    }
}



