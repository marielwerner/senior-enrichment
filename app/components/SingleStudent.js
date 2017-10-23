import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
export default class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {},
            inputCampusName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const studentId = this.props.match.params.studentId
        axios.get(`/api/students/${studentId}`)
        .then(result => result.data)
        .then(student => {
            this.setState({
                student: student
            })
        })
    }
    handleChange(event){
        this.setState({
            inputCampusName: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const oldCampusId = this.state.student.campusId
        const newCampus = this.props.campuses.find(campus => campus.name===this.state.inputCampusName)
        const studentId = this.state.student.id
        axios.put(`/api/students/${studentId}/campuses/${newCampus.id}`)
            .then(student => {
                this.setState({
                    student: student
                })
            })
            .then(() => {
                if (oldCampusId !== this.state.student.campusId)
                {
                    axios.get(`/api/students/${studentId}`)
                        .then(result => result.data)
                        .then(student => {
                            this.setState({
                                student: student,
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
        })
    }
    render() {
        const student = this.state.student
        const campuses = this.props.campuses
        return (
            <div>
            <NavBar />
            <div className="student">
                <h3>{student.name}</h3>
                <h3>{student.email}</h3>
                {campuses && campuses.filter(campus => campus.id === student.campusId).map(campus =>{
                    return <Link to={`/campuses/${campus.id}`} style={{textDecoration:'none'}}><h3 key={campus.id}>{campus.name}</h3></Link>
                })}
                <h4>Assign {student.name} to another campus</h4>
                <select onChange={this.handleChange}>
                {
                    [' '].concat(this.props.campuses).map(campus => {
                        return (
                            <option key={campus.id} name="campus">{campus.name}</option>
                        )
                    })
                }
                </select>
                <form onSubmit={this.handleSubmit}>
                    <input className = "submit" type="submit" value="submit" />
                </form><br/>
            </div>
            </div>
        )
    }
}

