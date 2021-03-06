'use strict'
const express = require('express');
const router = new express.Router();
const models = require('../../db/models')
const Student = models.Student;
module.exports = router;

// GET All Students
router.get('/', (req, res, next) => {
    Student.findAll({
        include: [{ all: true }]
    })
        .then(students => res.json(students))
        .catch(next)
})

// GET Single Student
router.get('/:studentId', (req, res, next) => {
    Student.findOne({
        where: {
            id: req.params.studentId
        },
        include: [{ all: true }]
    })
        .then(student => res.json(student))
        .catch(next)
})

// POST New Student
router.post('/', (req, res, next) => {
    Student.create(req.body)
        .then(student => res.json(student))
        .catch(next);
})

// UPDATE Single Student
router.put('/:studentId', (req, res, next) => {
    Student.update(req.body,
        {
            where: {
                id: req.params.studentId
            }
        })
        .then(() => res.send('updated'))
        .catch(next);
})

// DELETE Single Student
router.delete('/:studentId', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(() => res.send('deleted'))
        .catch(next);
})

// UPDATE Campus for Single Student
router.put('/:studentId/campuses/:campusId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(student => {
            return student.update({
                campusId: req.params.campusId
            })
        })
        .then(updatedStudent => {
            res.json(updatedStudent)
        })
        .catch(next)
})