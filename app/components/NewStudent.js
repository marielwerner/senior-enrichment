import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
export default class NewCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputStudentName: '',
            inputStudentEmail: '',
            inputStudentCampus: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeCampus = this.handleChangeCampus.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeName(event) {
        this.setState({
            inputStudentName: event.target.value
        })
    }
    handleChangeEmail(event) {
        this.setState({
            inputStudentEmail: event.target.value
        })
    }
    handleChangeCampus(event) {
        this.setState({
            inputStudentCampus: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const campus = this.props.campuses.find(campus => {
            return this.state.inputStudentCampus.trim() === campus.name.trim()
        })
        const campusId = campus.id
        this.props.addStudent(this.state.inputStudentName, this.state.inputStudentEmail, campusId)
        this.setState({
            inputStudentName: '',
            inputStudentEmail: '',
            inputStudentCampus: ''
        })
        window.history.back()
    }
    render() {
        return (
            <div>
                <NavBar />
                <h2>Add A Student</h2>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="newStudentName" value={this.state.inputStudentName} onChange={this.handleChangeName} /><br />
                    Email: <input type="text" name="newStudentEmail" value={this.state.inputStudentEmail} onChange={this.handleChangeEmail} /><br />
                    Campus: <select onChange={this.handleChangeCampus}>
                        {[' '].concat(this.props.campuses).map(campus => {
                            return (
                                <option key={campus.id} name="campus" >{campus.name}</option>
                            )
                        })}
                    </select><br/>
                    <input className="submit" type="submit" value="submit" /><br />
                </form>
            </div>
        )
    }
}
