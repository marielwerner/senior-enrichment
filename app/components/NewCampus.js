import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class NewCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputCampus: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            inputCampus: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.addCampus(this.state.inputCampus)
        this.setState({
            inputCampus: ''
        })
    }
    render() {
        return (
            <div>
                <h3>Add A Campus</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newCampus" value={this.state.inputCampus} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
                <h3><Link to="/campuses">All Campuses</Link></h3>
                <h3><Link to="/students">All Students</Link></h3>
                <h3><Link to="/">Home</Link></h3>
            </div>
        )
    }
}