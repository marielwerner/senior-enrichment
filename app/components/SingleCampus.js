// import React, { Component } from 'react'
// import axios from 'axios'
// import Bluebird from 'bluebird'
// import { Link } from 'react-router-dom'
// export default class SingleCampus extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campus: {},
//             students: []
//         }
//         this.removeStudentFromCampus = this.removeStudentFromCampus.bind(this)
//     }
//     componentDidMount() {
//         const campusId = this.props.match.params.campusId
//         const findingCampus = axios.get(`/api/campuses/${campusId}`)
//         const findingStudents = axios.get('/api/students')
//         Bluebird.all([findingCampus, findingStudents])
//         .then(resultArray => resultArray.map(res => res.data))
//         .then(dataArray => {
//             const campus = dataArray[0];
//             const students = dataArray[1];
//             const selectedStudents = students.filter(student => student.campusId === campus.id)
//             this.setState({
//                 campus: campus,
//                 students: selectedStudents
//             })
//         })
//     }
//     removeStudentFromCampus (studentId) {
//        axios.get('/api/students')
//             .then(result => result.data)
//             .then(students => {
//                 const outgoingStudent = students.find(student => {
//                     return student.id === studentId
//                 })
//                 axios.put(`/api/students/${outgoingStudent.id}`,{campusId: null})
//                     .then(() => {
//                         const remainingStudents = this.state.students.filter(student => {
//                             return student.id !== studentId
//                          })
//                          this.setState({
//                              students: remainingStudents
//                          })
//                     })
//                 })
//     }
//     render () {
//         const campus = this.state.campus
//         const students = this.state.students
//         return (
//             <div className="campus">
//                 <h2>{campus.name}</h2>
//                 <h3>STUDENTS</h3>
//                 <ul>
//                     {
//                         students.map((student,i) => {
//                             return (<li key={i}><Link to={`/students/${student.id}`}>
//                             <h3>{student.name}</h3></Link>
//                             <button onClick={()=>this.removeStudentFromCampus(student.id)}>x</button>
//                             </li>
//                         )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

////////////////////////////////////

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AllStudents from './AllStudents'

export default class SingleCampus extends Component {
    constructor(props){
        super(props)
        this.state = {
            campus: {},
        }
        this.getCampusById = this.getCampusById.bind(this)
        this.deleteStudentFromCampus = this.deleteStudentFromCampus.bind(this)
    }
    getCampusById(campusId) {
        axios.get(`/api/campuses/${campusId}`)
            .then(result => result.data)
            .then(campus => this.setState({
                campus: campus
            }))
    }
    componentDidMount() {
        const campusId = this.props.match.params.campusId
        this.getCampusById(campusId)
    }

    deleteStudentFromCampus(campusId, studentId){
       axios.delete(`/api/campuses/${campusId}/students/${studentId}`)
    }
    render() {
        const campus = this.state.campus
        return (
            <div className="campus">
                <h3>{campus.name}</h3>
                {   
                    campus.students && campus.students.map((student,index) => {
                        return (
                            <div key={student.id}>
                                <h4><Link to={`/students/${student.id}`}>{student.name}</Link></h4>
                                <button onClick={()=>this.deleteStudentFromCampus(campus.id,student.id)}>x</button>
                            </div>
                        )
                    })
                }
                <h3><Link to="/students">All Students</Link></h3>
                <h3><Link to="/campuses">Back to All Campuses</Link></h3>
                <h3><Link to="/">Home</Link></h3>
            </div>
        )
    }
}
