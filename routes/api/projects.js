const express = require('express');
const { check, validationResult } = require('express-validator');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

// create custom asyncForEach function
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

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
    const { name, stackname, projdesc, projgitlink, projlivelink, thumbnail, images } = req.body;

    try{
        // check if user exists
        let project = await Project.findOne({ name });

        if (project){
            return res.status(400).json({ errors: [ { msg: "Project already exists" } ] })
        }

        // create new proj 
        project = new Project({
            name,
            stackname,
            projdesc,
            projgitlink,
            projlivelink
        });

        // upload thumbnail image to cloudinary
        await cloudinary.uploader.upload(thumbnail, function(err, result){
            if(err)
                return res.status(500).json({errors: [ { msg: 'Image failed to upload' } ]});
            project.thumbnail = result.url;
        });

        const uploadImages = async () => {
            await asyncForEach(images, async (image) => {
                await cloudinary.uploader.upload(image, function(err, result){
                    if(err)
                        return res.status(500).json({errors: [ { msg: 'Image failed to upload' } ]});
                    project.images.push(result.url);
                });
            });
            await project.save();
        };

        uploadImages();
        
        res.status(200).json({msg: 'succesfully added project'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }

});

// handle deletion for project
// router.delete('/project/:id', async (req, res) => {
//     try{
//         await Project.findOneAndRemove({ user: req.user.id });
//         res.json('deleted successfully');
//     } catch (err) {
//         console.err(err.message);
//         res.status(500).send('Server Error');
//     }
// });

module.exports = router;