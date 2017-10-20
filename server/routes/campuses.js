'ues strict'
const express = require('express');
const router = new express.Router();
const models = require('../../db/models')
const Campus = models.Campus;
const Student = models.Student;
module.exports = router;

// GET All Campuses
router.get('/', (req, res, next) => {
    Campus.findAll({
        include: [{all:true}]
    })
    .then(campuses => res.json(campuses))
    .catch(next)
})

// GET Single Campus
router.get('/:campusId', (req, res, next) => {
    Campus.findOne({
        where: {
            id: req.params.campusId},
            include: [{all:true}]
    })
    .then(campus => res.json(campus))
    .catch(next);
})

// POST New Campus
router.post('/', (req,res,next) =>{
    Campus.create(req.body)
            .then(campus => res.json(campus))
            .catch(next);
})

// UPDATE Single Campus
router.put('/:campusId', (req, res, next) => {
    Campus.update(req.body, {
        where: {
            id: req.params.campusId,
        }
    })
        .then(() => res.send('updated'))
        .catch(next);
})
// DELETE Single Campus
router.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
        .then(campus => res.send('deleted'))
        .catch(next);
})

// GET Students at Single Campus
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

// DELETE Student from Single Campus
router.delete('/:campusId/students/:studentId',(req,res,next) => {
    Student.findById(req.params.studentId)
        .then(student => {
            res.json(student)
            return student.setCampus(null)})
        .catch(next)
        
})

 