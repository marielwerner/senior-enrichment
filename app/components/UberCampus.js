import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import StatefulCampuses from './StatefulCampuses'
export default class UberCampus extends React.Component {
    constructor(props){
        super(props)
        this.state={
            campuses: []
        }
        this.addCampus = this.addCampus.bind(this)
    }
    componentDidMount() {
        axios.get('/api/campuses')
        .then(result => result.data)
        .then(campuses => {
            this.setState({
                campuses: campuses
            })
        })
    }
    addCampus(campusName){
        return axios.post('/api/campuses',{name: campusName})
            .then(result => result.data)
            .then(campus => {
                this.setState({
                    campuses: [...this.state.campuses,campus.name]
                })
            })
    }
    render () {
    return (
        <div>
        <StatefulCampuses addCampus={this.addCampus} campuses={this.state.campuses}/>
        </div>
    )
}
}