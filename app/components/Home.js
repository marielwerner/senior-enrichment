import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import StatefulCampuses from './StatefulCampuses'
export default class Home extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         campuses: []
    //     }
    //     this.addCampus = this.addCampus.bind(this)
    // }
    // componentDidMount() {
    //     axios.get('/api/campuses')
    //     .then(result => result.data)
    //     .then(campuses => {
    //         this.setState({
    //             campuses: campuses
    //         })
    //     })
    // }
    // addCampus(campusName){
    //     axios.post('/api/campuses',{name: campusName})
    //         .then(result => result.data)
    //         .then(campus => {
    //             this.setState({
    //                 campuses: [...this.state.campuses,campus.name]
    //             })
    //         })
    // }
    render () {
    return (
        <div>
        <section>
            <h1 className="menu-item">
            <Link to="/students">Students</Link>
            </h1>
        </section>
        <section>
            <h1 className = "menu-item">
            <Link to="/campuses">Campuses</Link>
            </h1>
        </section>
        
        </div>
    )
}
}

//<StatefulCampuses addCampus={this.addCampus} campuses={this.state.campuses}/>

//export default Home

//////////////////

// import React,{ Component } from 'react'
// import { Link } from 'react-router-dom'
// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campuses: [],
//             students: []
//         }
//     }
//     componentDidMount () {
//         axios.get('/api/campuses')
//             .then(result => result.data)
//             .then(campuses => {
//                 this.setState({
//                     campuses: campuses
//                 })
//             })
//     }
//     addCampus(campusName) {
//         axios.post('/api/campuses',{name: campusName})
//             .then(result => result.data)
//             .then(campus => {
//                 this.setState({
//                     campuses: [...this.state.campuses,campus]
//                 })
//             })
//     }
//     render () {
        
//     }
// }