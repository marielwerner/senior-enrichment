import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
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
        window.history.back()
    }
    render() {
        return (
            <div>
                <NavBar />
                <h2>Add A Campus</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="newCampus" value={this.state.inputCampus} onChange={this.handleChange} />
                    <input className = "submit" type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

