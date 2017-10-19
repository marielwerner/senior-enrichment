// import React, { Component } from 'react'
// import axios from 'axios'
// import AllCampuses from './AllCampuses'
// import AllStudents from './AllStudents'
// export default class StatefulCampuses extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campuses: [],
//             newCampus: '',
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.addCampus = this.addCampus.bind(this)
//         this.deleteCampus = this.deleteCampus.bind(this)
//     }
//     componentDidMount() {
//         axios.get('/api/campuses')
//             .then(result => result.data)
//             .then(campuses => {
//                 this.setState({
//                     campuses: campuses
//                 })
//             })
//     }
//     addCampus(campusName) {
//         axios.post('/api/campuses', { name: campusName })
//             .then(res => res.data)
//             .then(campus => {
//                 this.setState({
//                     campuses: [...this.state.campuses, campus]
//                 })
//             })
//     }
//     deleteCampus(campusId) {
//         axios.delete(`/api/campuses/${campusId}`)
//             .then(campus => {
//                 axios.get('/api/students')
//                     .then(res => res.data)
//                     .then(students => {
//                         return students.filter(student => student.campusId === null)
//                     })
//                     // .then(studentsNoMore => {
//                     //     studentsNoMore && studentsNoMore.map(student => axios.delete(`/api/students/${student.id}`))
//                     // })
//                     .then(() => {
//                         axios.get('/api/campuses')
//                             .then(res => res.data)
//                             .then(campuses => {
//                                 this.setState({
//                                 campuses: campuses,
//                         })
//                     })
//             })
//         })
//     }
//     handleChange(event) {
//         this.setState({
//             newCampus: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         event.preventDefault()
//         this.addCampus(this.state.newCampus)
//     }
//     render() {
//         return (
//             <div>
//                 <AllCampuses campuses={this.state.campuses} deleteCampus={this.deleteCampus} />
//                 <form onSubmit={this.handleSubmit} className="addCampus">
//                     Campus: <input type="text" className="campusInfo" name="campusName" onChange={this.handleChange} /><br />
//                     <input type="submit" className="studentButton" value="+ Campus" />
//                 </form>
//             </div>
//         )
//     }
// }

//////////////////////////
// import React, { Component } from 'react'
// import axios from 'axios'
// import AllCampuses from './AllCampuses'
// import NewCampus from './NewCampus'

// export default class StatefulCampuses extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             campuses: []
//         }
//         //this.addCampus = this.addCampus.bind(this)
//     }
//     componentDidMount() {
//         axios.get('/api/campuses')
//             .then(result => result.data)
//             .then(campuses => {
//                 this.setState({
//                     campuses: campuses
//                 })
//             })
//     }
//     // componentWillReceiveProps(nextProps){
//     //     const currentCampuses = this.props.campuses.length
//     //     //console.log('hi ', this.props)
//     //     const updatedCampuses = nextProps.campuses.length 
//     //     if (currentCampuses !== updatedCampuses) this.state.campuses = updatedCampuses
//     // }
//     // addCampus(campusName){
//     //     axios.post('/api/campuses',{name: campusName})
//     //         .then(result => result.data)
//     //         .then(campus => {
//     //             this.setState({
//     //                 campuses: [...this.state.campuses,campus.name]
//     //             })
//     //         })
//     // }
//     render() {
//         return (
//         <div>
//             <AllCampuses campuses={this.props.campuses} />
//             <NewCampus addCampus={this.addCampus} />
//         </div>
//         )
//     }
// }