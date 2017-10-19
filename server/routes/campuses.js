'ues strict'
const express = require('express');
const router = new express.Router();
const models = require('../../db/models')
const Campus = models.Campus;
const Student = models.Student;
module.exports = router;

router.get('/', (req, res, next) => {
    Campus.findAll({
        include: [{all:true}]
    })
    .then(campuses => res.json(campuses))
    .catch(next)
})

router.get('/:campusId', (req, res, next) => {
    Campus.findOne({
        where: {
            id: req.params.campusId},
            include: [{all:true}]
    })
    .then(campus => res.json(campus))
    .catch(next);
})

router.post('/', (req,res,next) =>{
    Campus.create(req.body)
            .then(campus => res.json(campus))
            .catch(next);
})

router.put('/:campusId', (req, res, next) => {
    Campus.update(req.body, {
        where: {
            id: req.params.campusId,
        }
    })
        .then(() => res.send('updated'))
        .catch(next);
})
router.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
        .then(campus => res.send('deleted'))
        .catch(next);
})

router.get('/:campusId', (req,res,next) =>{
    res.json(req.campus)
})

router.get('/:campusId/students',(req,res,next) => {
    Campus.findById(req.params.campusId)
        .then(campus => {
            campus.getStudents({
                include: [{all:true}]
            })
            .then(students => res.json(students))
        })
        .catch(next)
    })

router.get('/campusId/students',(req,res,next) => {
    Campus.findById(req.params.campusId)
        .then(campus => {
            campus.getStudents({
                include: [{all:true}]
            })
        })
        .then(students => res.json(students))
        .catch(next)
})
router.delete('/:campusId/students/:studentId',(req,res,next) => {
    Student.findById(req.params.studentId)
        .then(student => student.setCampus(null))
        .then(res.sendStatus(202))
        .catch(next);
})

 // Campus.findById(req.params.campusId)
    //     .then(campus => {
    //         campus.getStudents({
    //             include: [{all:true}]
    //         })
    //         .then(students => students.filter(student => student.id === Number(req.params.studentId)))
    //         .then(student => {
    //             console.log(student)
    //             return student.destroy()
    //         })
    //         .catch(next)
    // })
// router.delete('/:campusId', (req, res, next) => {
//     Campus.findById(req.params.campusId)
//         .then(campus => {
//             campus.getStudents({
//                 include:[Student]
//             })
//         })
//         .then(studen => campus.destroy())
//         .catch(next)
// })
