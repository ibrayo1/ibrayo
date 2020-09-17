const express = require('express');
const { check, validationResult } = require('express-validator');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

// configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Project Model
const Project = require('../../models/Project');

// get requests that handles geting all the projects
router.get('/projects', async (req, res) =>{
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

// post requests which handles adding project to database
router.post('/project',
[
    check('name', 'Please enter a name for project').not().isEmpty(),
    check('stackname', 'Please enter a stack name').not().isEmpty(),
    check('projdesc', 'Please enter a project description').not().isEmpty(),
    check('thumbnail', 'Please add an image for project thumbnail').not().isEmpty()
],
async (req, res) => {
    // if post request is invalid return bad request
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    
    // extract data from post request
    const { name, stackname, projdesc, projgitlink, projlivelink, thumbnail } = req.body;

    try{
        // check if user exists
        let project = await Project.findOne({ name });

        if (project){
            return res.status(400).json({ errors: [ { msg: "Project already exists" } ] })
        }

        // upload image to cloudinary
        let imageUrl;
        await cloudinary.uploader.upload(thumbnail, function(err, result){
            if(err)
                return res.status(500).json({errors: [ { msg: 'Image failed to upload' } ]});
            imageUrl = result.url;
        });

        // create new proj 
        project = new Project({
            name: name,
            stackname: stackname,
            projdesc: projdesc,
            projgitlink: projgitlink,
            projlivelink: projlivelink,
            thumbnail: imageUrl
        });

        await project.save();
        
        res.status(200).json({msg: 'succesfully added project'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }

});

// handle deletion for project
router.delete('/project/:id', function(req, res){
    Project.findById(req.params.id)
        .then(project => project.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;