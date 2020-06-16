const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project');

// @route GET api/projects
// @desc GET all projects
// @access Public
router.get('/', function(req, res){
    Project.find()
        .sort({ date: -1 })
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err));
});

// @route POST api/projects
// @desc Create An Project
// @access Public
router.post('/', function(req, res){
    const newProject = new Project({
        name: req.body.name,
    });

    newProject.save()
        .then(project => res.json(project))
        .catch(err => res.status(400).json(err));
});

// @route DELETE api/projects/:id
// @desc Delete An Project
// @access Public
router.delete('/:id', function(req, res){
    Project.findById(req.params.id)
        .then(project => project.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;