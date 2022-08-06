const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const secret = require('../config.json');
const BlogSchema = require('../models/Blog');

const JWT_SECRET = secret.JWT_SECRET;



// Route 1: Creating A New Blog: POST: http://localhost:5000/api/blog/createblog. Login Required
router.post('/createblog', fetchuser, [
    body('title', "Title should be at least 50 characters.").isLength({ min: 50 }),
    body('description', "Description Should Be At Least 150 Characters.").isLength({ min: 150 }),
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const theUser = await UserSchema.findById(req.user.id);

        const newBlog = await BlogSchema.create({
            title: req.body.title,
            description: req.body.description,
            username: theUser.username,
        });

        res.status(200).json(newBlog);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});





// Route 2: Getting all Blogs: GET: http://localhost:5000/api/blog/getblogs. Login Required
router.get('/getblogs', async (req, res) => {

    try {
        const allBlogs = await BlogSchema.find();
        res.status(200).json(allBlogs);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});




module.exports = router;