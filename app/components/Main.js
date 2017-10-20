import React, { Component } from 'react'
import { HashRouter, Route, Switch, hashHistory} from 'react-router-dom'
import Promise from 'bluebird'
import axios from 'axios'
import Home from './Home'
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import NewCampus from './NewCampus'
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import NewStudent from './NewStudent'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            students: [],
            campuses: [],
        }
        this.addCampus = this.addCampus.bind(this)
        this.addStudent = this.addStudent.bind(this)
        this.deleteCampus = this.deleteCampus.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
        this.updateStudent = this.updateStudent.bind(this)
    }
    componentDidMount() {
        const gettingStudents = axios.get('/api/students');
        const gettingCampuses = axios.get('/api/campuses');
        Promise.all(
            [gettingStudents,gettingCampuses]
        )
        .then(resultArray => resultArray.map(result => result.data))
        .then(dataArray => {
            this.setState({
                students: dataArray[0],
                campuses: dataArray[1]
            })
        })
    }
    updateStudent(newStudentArray){
        this.setState({
            students: newStudentArray
        })
    }
    addCampus(campusName) {
        axios.post('/api/campuses', {name: campusName})
            .then(result => result.data)
            .then(newCampus => {
                this.setState({
                    campuses: [...this.state.campuses,newCampus]
                })
            })
    }
    addStudent(studentName, studentEmail,campusId){
        axios.post('/api/students',{name: studentName, email: studentEmail, campusId: campusId})
            .then(result => result.data)
            .then(newStudent => {
                this.setState({
                    students: [...this.state.students,newStudent]
                })
            })
    }
    deleteCampus(campusId){
        axios.delete(`/api/campuses/${campusId}`)
            .then(() => {
                this.setState({
                    campuses: this.state.campuses.filter(campus => campus.id!==campusId)
                })
            })
    }
    deleteStudent(studentId){
        axios.delete(`/api/students/${studentId}`)
            .then(() => {
                this.setState({
                    students: this.state.students.filter(student => student.id!==studentId)
                })
            })
    }
    render(){
        return (
            <HashRouter>
                <div id="main" className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/campuses" render ={() => <AllCampuses campuses={this.state.campuses} deleteCampus={this.deleteCampus}/>}/>
                        <Route exact path="/campuses/:campusId" render={(props) => <SingleCampus {...props} updateStudent={this.updateStudent}/>}/>
                        <Route exact path="/students" render={() => <AllStudents students={this.state.students} campuses={this.state.campuses} deleteStudent={this.deleteStudent}/>}/>
                        <Route exact path="/students/:studentId" render={(props) => <SingleStudent campuses ={this.state.campuses} updateStudent={this.updateStudent} {...props}/>}/>
                        <Route exact path="/new-campus" render={() => <NewCampus addCampus={this.addCampus}/>} />
                        <Route exact path="/new-student" render={() => <NewStudent addStudent={this.addStudent} campuses={this.state.campuses} students = {this.state.students}/>}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
