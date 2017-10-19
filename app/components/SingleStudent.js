// import React, { Component } from 'react'
// import axios from 'axios'
// import Bluebird from 'bluebird'
// import { Link } from 'react-router-dom'
// export default class SingleStudent extends Component {
//     constructor(props) {
//         super(props), 
//         this.state = { 
//             student: {},
//             campus: {}
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     componentDidMount () {
//         const studentId = this.props.match.params.studentId
//         const findingStudent =  axios.get(`/api/students/${studentId}`)
//         const findingCampuses = axios.get('/api/campuses')
//         Bluebird.all([findingStudent,findingCampuses])
//         .then(resArray => resArray.map(res => res.data))
//         .then(dataArray => {
//             const selectedStudent = dataArray[0];
//             const schools = dataArray[1];
//             const selectedSchool = schools && schools.find(school => school.id === selectedStudent.campusId) 
//             this.setState({
//                 student: selectedStudent,
//                 campus: selectedSchool || {},
//                 newCampus: ''
//             })
//         })
//     }
//     handleChange(event) {
//         this.setState({
//             newCampus: event.target.value
//         })
//     }

//     handleSubmit (event) {
//         event.preventDefault()
//         axios.get('/api/campuses')
//             .then(result => result.data)
//             .then(campuses => { 
//                 return campuses.find(campus => campus.name === this.state.newCampus)
//             })
//             .then(campus => {
//                 axios.put(`/api/students/${this.state.student.id}`,{campusId: campus.id})
//     })
// }
//     render () {
//         const student = this.state.student
//         const campus = this.state.campus
//         return (
//             <div className = "student">
//                 <h2>{student.name}</h2>
//                 <h3>{student.email}</h3>
                
//                 {
//                     (student.campusId!==null) ? 
//                     <Link to={`/campuses/${campus.id}`}><h3>{campus.name}</h3></Link> : 
//                     <h3>NO CAMPUS ASSIGNED</h3>
//                 }
//                 <form onSubmit={this.handleSubmit}>
//                 Update Campus: <input type="text" name="updateCampus" onChange={this.handleChange}/>
//                 <input type="submit" value="submit" />
//                 </form>
                
//             </div>
//         )
//     }
// }

//////////////////////////////

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        //const currentCampusId = this.props
        //console.log('hi again', this.props)
        const studentId = this.props.match.params.studentId
        axios.get(`/api/students/${studentId}`)
        .then(result => result.data)
        .then(student => {
            this.setState({
                student: student
            })
        })
        //console.log('hi again again', this.props)
    }
    componentWillReceiveProps(nextProps){
        //.find(student => student === this.state.student)//.campusId
        
        // const nextCampusId = nexProps.students.find(student => student === this.state.student).campusId
        // if (currentCampusId !== nextCampusId) {
        //     axios.get(`/api/stinds/${studentid}`)
        //         .then(result => result.data)
        //         .then(student => {
        //             this.setState({
        //                 student: student
        //             })
        //         })
        // }
    }
    handleChange(event){
        this.setState({
            inputCampusName: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const newCampus = this.props.campuses.find(campus => campus.name===this.state.inputCampusName)
        const studentId = this.props.match.params.studentId
        axios.put(`/api/students/${this.state.student.id}/campuses/${newCampus.id}`)
            .then(axios.get(`/api/students/${studentId}`)
            .then(result => result.data)
            .then(student => {
                this.setState({
                    student: student,
                    inputCampusName: null
                })
            }))
    }
    render() {
        console.log('hi ', this.props)
        const student = this.state.student
        const campuses = this.props.campuses
        return (
            <div className="student">
                <h3>{student.name}</h3>
                <h3>{student.email}</h3>
                {campuses && campuses.filter(campus => campus.id === student.campusId).map(campus =>{
                    return <h3><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h3>
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
                    <input type="submit" value="submit" />
                </form><br/>
                <h3><Link to="/students">Back to All Students</Link></h3>
                <h3><Link to="/campuses">All Campuses</Link></h3>
                <h3><Link to="/">Home</Link></h3>
            </div>
        )
    }
}


