// import React, { Component } from 'react'
// import axios from 'axios'
// import AllStudents from './AllStudents'
// export default class StatefulStudents extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             students: [],
//             newStudentName: '',
//             newStudentEmail: '',
//             newStudentSchool: ''
//         }
//         this.handleChangeName = this.handleChangeName.bind(this);
//         this.handleChangeEmail = this.handleChangeEmail.bind(this);
//         this.handleChangeSchool = this.handleChangeSchool.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.addStudent = this.addStudent.bind(this);
//         this.deleteStudent = this.deleteStudent.bind(this);

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
//     addStudent(studentName,studentEmail,studentCampusId) {
//         axios.post('/api/students', {name: studentName, email: studentEmail, campusId: studentCampusId})
//             .then(result => result.data)
//             .then(student => {
//                 this.setState({
//                     students: [...this.state.students, student]
//                 })
//             })
//     }
//     deleteStudent(studentId){
//         axios.delete(`/api/students/${studentId}`)
//             .then(() => {
//                 axios.get('/api/students')
//                     .then(result => result.data)
//                     .then(students => {
//                         this.setState({
//                             students: students
//                             })
//                     })
//             })
        
//     }
//     handleChangeName(event) {
//        this.setState({
//             newStudentName: event.target.value
//        })
//     }
//     handleChangeEmail(event){
//         this.setState({
//             newStudentEmail: event.target.value
//         })
//     }
//     handleChangeSchool(event){
//         this.setState({
//             newStudentSchool: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         event.preventDefault()
//         axios.get('/api/campuses')
//             .then(res => res.data)
//             .then(campuses => {
//                 const findMatch = campuses.find(campus => this.state.newStudentSchool === campus.name)
//                 this.addStudent(this.state.newStudentName, this.state.newStudentEmail, findMatch.id)
//                 })
//                 .then(() => {
//                     this.setState({
//                         newStudentName: '',
//                         newStudentEmail: '',
//                         newStudentSchool: ''
//                     })
//                 })
//     } 
//     render() {
//         return (
//             <div>
//                 <AllStudents students={this.state.students} deleteStudent={this.deleteStudent}/>
//                 <form onSubmit={this.handleSubmit} className="addStudent">
//                     Student Name: <input type="text" className="studentInfo" name="studentName" onChange={this.handleChangeName} /><br/>
//                     Student Email: <input type="text" className="studentInfo" name="studentEmail" onChange={this.handleChangeEmail} /><br/>
//                     Student School: <input type="textr" className="studentInfo" name="studentSchool" onChange={this.handleChangeSchool} /><br/>
//                     <input type="submit" className="studentButton" value="+ Student" />
//                 </form>
//             </div>
//         )
//     }
// }

/////////////////////////
import React, { Component } from 'react'
import axios from 'axios'
import AllStudents from './AllStudents'

export default class StatefulStudents extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        axios.get('/api/students')
            .then(result => result.data)
            .then(students => {
                this.setState({
                    students: students
                })
            })
    }
    render() {
        return (
            <AllStudents students={this.state.students} />
        )
    }
}